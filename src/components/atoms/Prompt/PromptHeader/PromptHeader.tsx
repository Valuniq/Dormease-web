'use client';
import Image from 'next/image';
import PromptHeaderLogo from '@public/images/PromptHeaderLogo.png';
import PromptHeaderOut from '@public/images/PromptHeaderOut.png';
import React from 'react';
import usePointManagementModal from '@/hooks/usePointManagmentModal';

const PromptHeader = ({ bgColor }: { bgColor?: string }) => {
  const { handleCloseModal } = usePointManagementModal();

  return (
    <div className={`${bgColor ? bgColor : 'bg-blue-blue30'} w-full h-39  flex justify-between pl-15 rounded-t-8`}>
      <Image src={PromptHeaderLogo} className='object-contain' width={39} height={11.65} alt='promptHeaderLogo' />
      <button
        onClick={() => handleCloseModal('pointDetail')}
        className={`hover:bg-red-red30 ${bgColor ? bgColor : 'bg-blue-blue30'} w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`}
      >
        <Image src={PromptHeaderOut} className='object-contain' width={10} height={10} alt='promptHeaderOut' />
      </button>
    </div>
  );
};

export default PromptHeader;
