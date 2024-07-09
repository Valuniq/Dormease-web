import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';
import calandarIcon from '@public/images/calendarIcon.png';
import Image from 'next/image';
const BuildingPriceSetting = () => {
  return (
    <div className='w-184 h-371 rounded-8 bg-gray-grayscale5 px-9 py-10 flex flex-col items-center  H4 text-gray-grayscale50'>
      <div className='w-full flex items-center justify-around mb-20'>
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
      <div className='flex items-center justify-between'>
        <TextBoxes
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'기간 선택'}
          type={'textBox5'}
        />
        <Image src={calandarIcon} alt='calendar' />
      </div>
      ~
      <div className='flex items-center justify-between'>
        <TextBoxes
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'기간 선택'}
          type={'textBox5'}
        />
        <Image src={calandarIcon} alt='calendar' />
      </div>
      <div className='mt-20 '>
        <TextBoxes
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'금액 입력'}
          type={'textBox6'}
        />
        원
      </div>
      <div className='mt-20 '>
        <TextBoxes
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'금액 입력'}
          type={'textBox6'}
        />
        원
      </div>
    </div>
  );
};

export default BuildingPriceSetting;
