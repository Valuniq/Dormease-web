'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React, { useState } from 'react';
import calandarIcon from '@public/images/calendarIcon.png';
import Image from 'next/image';
import AmountEnterList from './AmountEnterList';
import AddPeriodBtn from '@/components/atoms/AllBtn/AddPeriodBtn/AddPeriodBtn';
import { useRecoilState } from 'recoil';
import { disabledFieldsState, dormitoryRoomTypeState, termReqIsActiveState, termReqListState } from '@/recoil/join';

type Props = {
  index: number;
  isActive: boolean;
};

const BuildingPriceElement = ({ index, isActive }: Props) => {
  const [termReqIsActive, setTermReqIsActive] = useRecoilState(termReqIsActiveState);
  const [termReqList, setTermReqList] = useRecoilState(termReqListState);
  const [dormitoryRoomType] = useRecoilState(dormitoryRoomTypeState);
  const [disabledFields] = useRecoilState(disabledFieldsState);

  // isActive 상태 토글
  const handleIsActive = () => {
    const newIsActiveState = [...termReqIsActive];
    newIsActiveState[index] = !newIsActiveState[index];
    setTermReqIsActive(newIsActiveState);
  };

  // 기간 데이터 변경 핸들러
  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const newTermReqList = [...termReqList];
    newTermReqList[index] = { ...newTermReqList[index], [field]: e.target.value };
    setTermReqList(newTermReqList);
  };

  // 금액 변경 핸들러: dormitoryRoomTypeId에 해당하는 데이터를 termReqList에 추가하거나 업데이트
  const handlePriceChange = (roomTypeId: number, newPrice: number) => {
    const newTermReqList = [...termReqList];

    // 기존의 dormitoryTermReqList를 깊은 복사
    const dormitoryTermReqList = newTermReqList[index].dormitoryTermReqList.map((dorm) =>
      dorm.dormitoryRoomTypeId === roomTypeId ? { ...dorm } : dorm,
    );

    const existingRoomIndex = dormitoryTermReqList.findIndex((dorm) => dorm.dormitoryRoomTypeId === roomTypeId);

    if (existingRoomIndex !== -1) {
      // 기존에 있으면 업데이트 (객체가 복사된 상태에서 수정됨)
      dormitoryTermReqList[existingRoomIndex] = {
        ...dormitoryTermReqList[existingRoomIndex],
        price: newPrice,
      };
    } else {
      // 기존에 없으면 추가
      dormitoryTermReqList.push({ dormitoryRoomTypeId: roomTypeId, price: newPrice });
    }

    newTermReqList[index] = { ...newTermReqList[index], dormitoryTermReqList };
    setTermReqList(newTermReqList);
  };

  return (
    <div className='relative'>
      {!isActive && (
        <div onClick={handleIsActive} className='absolute top-110 left-50 z-joinSettingAddPeriodBtn'>
          <AddPeriodBtn />
        </div>
      )}

      <div
        className={`pt-17 w-184 min-h-371 h-full rounded-8 bg-gray-grayscale5 ${
          isActive ? 'opacity-100' : 'opacity-50 pointer-events-none'
        }`}
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
          {/* dormitoryRoomTypeState의 항목을 모두 렌더링 */}
          {dormitoryRoomType.map((room) => (
            <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
              <AmountEnterList
                roomTypeId={room.dormitoryRoomTypeId}
                onPriceChange={(newPrice) => handlePriceChange(room.dormitoryRoomTypeId, newPrice)}
                price={
                  termReqList[index].dormitoryTermReqList.find(
                    (dormReq) => dormReq.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
                  )?.price || 0
                }
                disabled={disabledFields[room.dormitoryRoomTypeId]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingPriceElement;
