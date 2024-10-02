'use client';

import React from 'react';

type Props = {
  input: number | null;
  setInput: (input: number) => void;
};

const DepositSetting = ({ input, setInput }: Props) => {
  return (
    <div className='flex items-center justify-between H4 text-gray-grayscale50'>
      <h1 className='mr-31'> 보증금 </h1>
      <input
        type='number'
        value={input !== null ? input : ''}
        onChange={(e) => setInput(parseInt(e.target.value))}
        className={`${input ? 'border-gray-grayscale50' : 'border-gray-grayscale30'} text-right H4-caption border-[0.5px] outline-none px-8 w-145 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
        placeholder='금액 입력'
      />
      <div className='w-3' />원
    </div>
  );
};

export default DepositSetting;
