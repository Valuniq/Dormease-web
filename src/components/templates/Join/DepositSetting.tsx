import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';

const DepositSetting = () => {
  return (
    <div className='flex items-center justify-between H4 text-gray-grayscale50'>
      <h1 className='mr-31'> 보증금 </h1>
      <TextBoxes
        input={''}
        setInput={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
        placeholder={'금액 입력'}
        type={'textBox6'}
      />
      <div className='w-3' />원
    </div>
  );
};

export default DepositSetting;
