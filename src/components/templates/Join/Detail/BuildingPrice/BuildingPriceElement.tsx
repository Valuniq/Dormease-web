'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React, { useState, useEffect } from 'react';
import calandarIcon from '@public/images/calendarIcon.png';
import Image from 'next/image';
import AmountEnterList from './AmountEnterList';
import AddPeriodBtn from '@/components/atoms/AllBtn/AddPeriodBtn/AddPeriodBtn';
import { useRecoilState } from 'recoil';
import { disabledFieldsState, dormitoryRoomTypeState, termReqIsActiveState, termReqListState } from '@/recoil/join';
import { todayDate } from '@/utils/dateUtils';

type Props = {
  index: number;
  isActive: boolean;
};

const BuildingPriceElement = ({ index, isActive }: Props) => {
  const [termReqIsActive, setTermReqIsActive] = useRecoilState(termReqIsActiveState);
  const [termReqList, setTermReqList] = useRecoilState(termReqListState);
  const [dormitoryRoomType] = useRecoilState(dormitoryRoomTypeState);
  const [disabledFields] = useRecoilState(disabledFieldsState);

  useEffect(() => {
    if (termReqList.length > 0) {
      // 기간별로 dormitoryTermReqList를 기숙사 방 타입만큼 초기화
      const updatedTermReqList = termReqList.map((term) => ({
        ...term,
        dormitoryTermReqList: dormitoryRoomType.map((room) => ({
          dormitoryRoomTypeId: room.dormitoryRoomTypeId,
          price: null, // 가격 초기화
        })),
      }));
      setTermReqList(updatedTermReqList);
    }
  }, [dormitoryRoomType, setTermReqList]);

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

  // 금액 변경 핸들러: dormitoryRoomTypeId에 해당하는 데이터를 업데이트
  const handlePriceChange = (roomTypeId: number, newPrice: number | null) => {
    const newTermReqList = [...termReqList];
    const updatedDormitoryTermReqList = newTermReqList[index].dormitoryTermReqList.map((dorm) =>
      dorm.dormitoryRoomTypeId === roomTypeId ? { ...dorm, price: newPrice } : dorm,
    );

    newTermReqList[index] = { ...newTermReqList[index], dormitoryTermReqList: updatedDormitoryTermReqList };
    setTermReqList(newTermReqList);
  };

  const startDate = termReqList[index].startDate;
  const endDate = termReqList[index].endDate;

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
          <div className='flex items-center justify-between'>
            {/* 입사 날짜 입력 (startDate) */}
            <input
              type='date'
              value={termReqList[index].startDate || ''}
              onChange={(e) => handleTermChange(e, 'startDate')}
              min={todayDate} // 최소 날짜 설정
              max={termReqList[index].endDate || ''} // endDate보다 늦을 수 없음
              className='w-155 H4-caption border-[0.5px] border-gray-grayscale40 outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30'
            />
          </div>
          ~
          <div className='flex items-center justify-between mb-22'>
            {/* 퇴사 날짜 입력 (endDate) */}
            <input
              type='date'
              value={termReqList[index].endDate || ''}
              onChange={(e) => handleTermChange(e, 'endDate')}
              min={termReqList[index].startDate || todayDate} // startDate보다 이를 수 없음
              className='w-155 H4-caption border-[0.5px] border-gray-grayscale40  outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30'
            />
          </div>
          {/* dormitoryRoomTypeState의 항목을 모두 렌더링 */}
          {dormitoryRoomType.map((room) => (
            <div key={room.dormitoryRoomTypeId} className='w-full h-34 mb-22'>
              <AmountEnterList
                roomTypeId={room.dormitoryRoomTypeId}
                onPriceChange={(value) => handlePriceChange(room.dormitoryRoomTypeId, value)}
                price={
                  termReqList[index].dormitoryTermReqList.find(
                    (dormReq) => dormReq.dormitoryRoomTypeId === room.dormitoryRoomTypeId,
                  )?.price ?? null
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
