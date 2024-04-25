import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import React from 'react';

type Props = {
  label: string;
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
};

const StandardCheck = ({ label, isOn, setIsOn }: Props) => {
  return (
    <div className='w-550 h-44 flex items-center justify-between'>
      <h1 className='H4 text-gray-grayscale50'>{label}</h1>
      <div className='w-226 flex items-center justify-between'>
        <div className='flex items-center'>
          <RadioBtn isOn={isOn} setIsOn={setIsOn} />
          <h2 className='H4-caption text-gray-grayscale50'>활성화</h2>
        </div>
        <div className='flex items-center'>
          <RadioBtn isOn={!isOn} setIsOn={setIsOn} />
          <h2 className='H4-caption text-gray-grayscale50'>비활성화</h2>
        </div>
      </div>
    </div>
  );
};

export default StandardCheck;
