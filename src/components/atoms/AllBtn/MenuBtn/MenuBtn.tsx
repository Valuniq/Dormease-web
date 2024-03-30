import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  label: string;
  menu: StaticImageData;
};

const MenuBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, menu, ...props }) => {
  return (
    <button
      {...props}
      className='flex items-center w-240 h-48 rounded-8 text-gray-grayscale-50 bg-white hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
    >
      <Image className='ml-19 mr-11' src={menu} alt='Menu' width={24} height={24} />
      {label}
    </button>
  );
};

export default MenuBtn;
