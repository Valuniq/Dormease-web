import { profile } from 'console';
import Image from 'next/image';
import React from 'react';
import Overlay from './Overlay';
import edit from '@public/images/Edit.png';
import grayLogo from '@public/logo/GrayLogo.png';

type Props = {
  id: string;
  name: string;
  isActive: boolean;
};

const ManagerNameBox = ({ id, name, isActive }: Props) => {
  return (
    <div className='relative w-333 h-366 rounded-10 bg-gray-grayscale5 flex flex-col items-start pt-30 pl-16'>
      <Overlay isActive={isActive} />
      <div className='mb-52 pl-14'>
        <span className='caption-1 text-gray-grayscale40 mb-27'>아이디</span>
        <p className='H3 text-gray-grayscale50 ml-8'>{id}</p>
      </div>
      <div className='flex items-center justify-between mb-85 pl-14 w-275'>
        <div className='mb-15'>
          <span className='caption-1 text-gray-grayscale40'>관리자명</span>
          <p className='H3 text-gray-grayscale50 ml-8'>{name}</p>
        </div>
        <button className='w-90 h-50 rounded-10 bg-gray-grayscale10 border-1 border-gray-grayscale20 flex items-center justify-center'>
          수정
          <Image src={edit} alt='edit' width={24} height={24} className='object-contain ml-7' />
        </button>
      </div>
      <Image src={grayLogo} alt='gray logo' width={123.16} height={36.77} className='object-contain' />
    </div>
  );
};

export default ManagerNameBox;
