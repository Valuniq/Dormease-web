import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  label: string;
  menu: StaticImageData;
  selected?: boolean;
};

const MenuBtn = ({ label, menu, selected = false, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='flex'>
      <button
        {...props}
        className={`alert-cap flex items-center h-48 rounded-8 text-gray-grayscale-50 ${selected ? 'w-222 bg-blue-blue15 mr-12' : ' w-240 bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20'}`}
      >
        <Image className='ml-19 mr-11' src={menu} alt='Menu' width={24} height={24} />
        {label}
      </button>
      <div className={`hover-transition ${selected ? 'w-6 h-48 rounded-8 bg-blue-blue30' : 'hidden'}`} />
    </div>
  );
};

export default MenuBtn;
