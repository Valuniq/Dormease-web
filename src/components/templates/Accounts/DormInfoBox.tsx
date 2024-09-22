import Image from 'next/image';
import React from 'react';
import profile from '@public/images/AccountsUserProfile.png';
import Overlay from './Overlay';

type Props = {
  dormInfo: string;
  isActive: boolean;
};

const DormInfoBox = ({ dormInfo, isActive }: Props) => {
  return (
    <div className='relative w-686 h-168 rounded-10 bg-gray-grayscale5 flex items-center pl-46'>
      <Overlay isActive={isActive} />
      <div className='flex items-center justify-center w-116 h-116 rounded-[50%] bg-gray-grayscale10 mr-31'>
        <Image src={profile} alt='profile' width={73} height={73} className='object-contain' />
      </div>
      <div>
        <span className='caption-1 text-gray-grayscale40'>기숙사 정보</span>
        <p className='H3 text-blue-blue30'>도미대학교 미즈캠퍼스</p>
      </div>
    </div>
  );
};

export default DormInfoBox;
