'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React, { useState } from 'react';
import calandarIcon from '@public/images/calendarIcon.png';
import Image from 'next/image';
import AmountEnterList from './AmountEnterList';
import AddPeriodBtn from '@/components/atoms/AllBtn/AddPeriodBtn/AddPeriodBtn';

const BuildingPriceSetting = () => {
  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='relative w-184 h-371 rounded-8 bg-gray-grayscale5 px-9 py-10 flex flex-col items-center  H4 text-gray-grayscale50'>
      {!isActive && (
        <div onClick={handleIsActive} className='absolute top-110 z-joinSettingAddPeriodBtn'>
          <AddPeriodBtn />
        </div>
      )}
      <div className={`${isActive ? 'opacity-100' : 'opacity-50 pointer-events-none'} flex flex-col items-center `}>
        <div className='w-112 flex items-center justify-around  mb-20'>
          이름
          <TextBoxes
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'기간'}
            type={'textBox4'}
          />
        </div>
        <div className='mb-8'>거주기간</div>
        <div className='flex items-center justify-between w-143'>
          <TextBoxes
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'입사 날짜'}
            type={'textBox5'}
          />
          <Image src={calandarIcon} alt='calendar' />
        </div>
        ~
        <div className='flex items-center justify-between w-143 mb-21'>
          <TextBoxes
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'퇴사 날짜'}
            type={'textBox5'}
          />
          <Image src={calandarIcon} alt='calendar' />
        </div>
        <AmountEnterList />
      </div>
    </div>
  );
};

export default BuildingPriceSetting;
