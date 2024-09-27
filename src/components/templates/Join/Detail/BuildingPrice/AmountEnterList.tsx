'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';

const AmountEnterList = () => {
  return (
    <div>
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
  );
};

export default AmountEnterList;
