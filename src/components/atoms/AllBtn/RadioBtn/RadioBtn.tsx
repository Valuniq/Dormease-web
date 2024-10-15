import React from 'react';

type Props = {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
  label?: string;
};

const RadioBtn = ({ isOn, setIsOn, label }: Props) => {
  return (
    <div className='flex items-center' onClick={() => setIsOn(!isOn)}>
      <div
        className={`flex justify-center items-center min-w-21 min-h-21 rounded-full border-2 cursor-pointer ${isOn ? 'border-gray-grayscale50' : 'border-gray-grayscale30'}`}
      >
        <div className={`${isOn && 'bg-blue-blue30 min-w-11 min-h-11 rounded-full'}`}></div>
      </div>
      <p className='pl-8 H4 text-gray-grayscale50 cursor-pointer whitespace-nowrap'>{label}</p>
    </div>
  );
};

export default RadioBtn;
