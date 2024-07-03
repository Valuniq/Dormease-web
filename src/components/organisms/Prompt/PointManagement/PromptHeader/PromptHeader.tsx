'use client';
import Image from 'next/image';
import PromptLogo from '@public/images/PromptLogo.png';
import PromptOut from '@public/images/PromptOut.png';
import React from 'react';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import { TPointManagementModalState } from '@/recoil/pointManagement';

const PromptHeader = ({ bgColor, modalName }: { bgColor?: string; modalName: keyof TPointManagementModalState }) => {
  const { handleCloseModal } = usePointManagementModal();

  return (
    <div className={`${bgColor ? bgColor : 'bg-blue-blue30'} w-full h-39  flex justify-between pl-15 rounded-t-8`}>
      <Image src={PromptLogo} className='object-contain' width={39} height={11.65} alt='PromptLogo' />
      <button
        onClick={() => handleCloseModal(modalName)}
        className={`hover:bg-red-red30 ${bgColor ? bgColor : 'bg-blue-blue30'} w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`}
      >
        <Image src={PromptOut} className='object-contain' width={10} height={10} alt='PromptOut' />
      </button>
    </div>
  );
};

export default PromptHeader;
