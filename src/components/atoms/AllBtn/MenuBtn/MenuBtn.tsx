import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  label: string;
  menu: StaticImageData;
  selected?: boolean;
};

const MenuBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  menu,
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex items-center w-240 h-48 rounded-8 text-gray-grayscale-50 + ${selected ? 'bg-gray-grayscale20' : 'bg-transparent hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
    >
      <Image className='ml-19 mr-11' src={menu} alt='Menu' width={24} height={24} />
      {label}
    </button>
  );
};

export default MenuBtn;
