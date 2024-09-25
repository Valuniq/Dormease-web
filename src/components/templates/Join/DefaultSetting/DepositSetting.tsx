import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';

type Props = {
  input: string;
  setInput: (input: string) => void;
};

const DepositSetting = ({ input, setInput }: Props) => {
  return (
    <div className='flex items-center justify-between H4 text-gray-grayscale50'>
      <h1 className='mr-31'> 보증금 </h1>
      <TextBoxes input={input} setInput={setInput} placeholder={'금액 입력'} type={'textBox6'} />
      <div className='w-3' />원
    </div>
  );
};

export default DepositSetting;
