import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';
import calendarIcon from '@public/images/calendarIcon.png';
import Image from 'next/image';

type Props = {
  label: '입사 신청 기간' | '입금 가능 기간';
  input: string;
  setInput: (input: string) => void;
};

const PeriodSetting = ({ label, input, setInput }: Props) => {
  return (
    <div className='flex items-center justify-between H4 text-gray-grayscale50'>
      <h1 className='mr-21'>{label}</h1>
      <div className='w-333 flex items-center justify-between'>
        <TextBoxes input={input} setInput={setInput} placeholder={'시작'} type={'textBox1'} />
        ~
        <TextBoxes
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'마감'}
          type={'textBox1'}
        />
        <Image className='ml-5' src={calendarIcon} alt='calendarIcon' />
      </div>
    </div>
  );
};

export default PeriodSetting;
