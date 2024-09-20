import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';

const AmountEnterList = () => {
  return (
    <div>
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

export default AmountEnterList;
