import React from 'react';
import ImageBtn from '@public/images/ImageBtn.svg';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
};

const BuildingSelectImageBtn = ({ image, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='group relative flex flex-col justify-center items-center w-381 h-247 rounded-8'>
      <div className='absolute inset-0 z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:hover-transition'>
        <ImageBtn />
        <div className='flex items-center justify-center caption-2 mt-13 w-93 h-24 bg-gray-grayscale20 text-gray-grayscale40 rounded-full'>
          이미지 수정
        </div>
      </div>
      <Image
        className='group-hover:brightness-50 group-hover:hover-transition shadow1 rounded-8'
        src={image}
        alt='Build'
        layout='fill'
        objectFit='cover'
      />
    </button>
  );
};

export default BuildingSelectImageBtn;
