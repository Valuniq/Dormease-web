'use client';
import Image from 'next/image';
import PromptLogo from '@public/images/PromptLogo.png';
import PromptOut from '@public/images/PromptOut.png';
import React from 'react';

const PromptHeader = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-blue-blue30'} w-full h-39  flex justify-between pl-15 rounded-t-8`}>
      <Image src={PromptLogo} alt='PromptLogo' className='object-contain' width={39} height={11.65} />
      <button
        className={`hover:bg-red-red30 ${bgColor ? bgColor : 'bg-blue-blue30'} w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`}
      >
        <Image src={PromptOut} alt='PromptOut' className='object-contain' width={10} height={10} />
      </button>
    </div>
  );
};

export default PromptHeader;
