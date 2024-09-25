'use client';
import AddMealticketBtn from '@/components/atoms/AllBtn/AddMealticketBtn/AddMealticketBtn';
import DeleteBtn from '@/components/atoms/AllBtn/DeleteBtn/DeleteBtn';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React, { useState } from 'react';

type MealTicket = {
  meal: string;
  price: string;
};

const TicketPriceSetting = () => {
  const [mealTickets, setMealTickets] = useState<MealTicket[]>([]);

  // 식권 항목 추가 (최대 5개)
  const handleTicket = () => {
    if (mealTickets.length < 5) {
      setMealTickets([...mealTickets, { meal: '', price: '' }]);
    } else {
      alert('식권은 최대 5개까지만 추가할 수 있습니다.');
    }
  };
  // 입력 값 변경 처리
  const handleInputChange = (index: number, field: keyof MealTicket, value: string) => {
    const updatedTickets = [...mealTickets];
    updatedTickets[index][field] = value;
    setMealTickets(updatedTickets);
  };

  // 항목 삭제 처리
  const handleDeleteTicket = (index: number) => {
    const updatedTickets = mealTickets.filter((_, i) => i !== index);
    setMealTickets(updatedTickets);
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
                input={ticket.meal}
                setInput={(value: string) => handleInputChange(index, 'meal', value)}
                placeholder={'식권'}
                type={'textBox7'}
              />
              식
            </div>
            <div className='flex items-center justify-between w-167'>
              <TextBoxes
                input={ticket.price}
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

export default TicketPriceSetting;
