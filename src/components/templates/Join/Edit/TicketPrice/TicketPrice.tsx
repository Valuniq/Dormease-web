'use client';
import AddMealticketBtn from '@/components/atoms/AllBtn/AddMealticketBtn/AddMealticketBtn';
import DeleteBtn from '@/components/atoms/AllBtn/DeleteBtn/DeleteBtn';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { nowJoinApplicationState } from '@/recoil/join';
import { nowJoinResponseMealTicketResList } from '@/types/join';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

type MealTicket = {
  meal: string;
  price: string;
};

const TicketPrice = () => {
  const [applicationData, setApplicationData] = useRecoilState(nowJoinApplicationState);

  // 기존 식권 데이터 상태 초기화
  const mealTickets = applicationData.mealTicketResList || [];

  // 식권 항목 추가 (최대 5개)
  const handleTicket = () => {
    if (mealTickets.length < 5) {
      const newTicket = { id: null, count: '', price: '' };
      const updatedTickets = [...mealTickets, newTicket];
      setApplicationData((prev) => ({
        ...prev,
        mealTicketResList: updatedTickets as nowJoinResponseMealTicketResList[],
      }));
    } else {
      alert('식권은 최대 5개까지만 추가할 수 있습니다.');
    }
  };

  // 입력 값 변경 처리
  const handleInputChange = (index: number, field: 'count' | 'price', value: string) => {
    const updatedTickets = mealTickets.map((ticket, i) => (i === index ? { ...ticket, [field]: value } : ticket));

    setApplicationData((prev) => ({
      ...prev,
      mealTicketResList: updatedTickets,
    }));
  };

  // 항목 삭제 처리
  const handleDeleteTicket = (index: number) => {
    const updatedTickets = mealTickets.filter((_, i) => i !== index);
    setApplicationData((prev) => ({
      ...prev,
      mealTicketResList: updatedTickets,
    }));
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      {mealTickets.map((ticket, index) => (
        <div
          key={index}
          className='hover-transition w-300 h-45 flex items-center justify-center  mt-15 p-2 hover:bg-gray-grayscale5 hover:rounded-l-10 hover:rounded-r-50 relative group'
        >
          <div className='flex justify-center items-center cursor-pointer'>
            <div className='flex items-center w-78 justify-between mr-9'>
              <TextBoxes
                input={ticket.count.toString()}
                setInput={(value: string) => handleInputChange(index, 'count', value)}
                placeholder={'식권'}
                type={'textBox7'}
              />
              식
            </div>
            <div className='flex items-center justify-between w-167'>
              <TextBoxes
                input={ticket.price.toString()}
                setInput={(value: string) => handleInputChange(index, 'price', value)}
                placeholder={'금액 입력'}
                type={'textBox6'}
              />
              원
            </div>
          </div>
          <div className='ml-7 opacity-0 group-hover:opacity-100 transition-opacity'>
            <DeleteBtn onClick={() => handleDeleteTicket(index)} />
          </div>
        </div>
      ))}
      <div className='mt-20'>
        <AddMealticketBtn onClick={handleTicket} />
      </div>
    </div>
  );
};

export default TicketPrice;
