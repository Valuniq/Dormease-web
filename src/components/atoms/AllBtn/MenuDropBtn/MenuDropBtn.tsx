import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  label: string;
  selected?: boolean;
};

const MenuBtn = ({ label, selected = false, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`alert-cap flex items-center w-159 h-34 rounded-8 text-gray-grayscale-50 ${selected ? 'bg-blue-blue15 mr-12' : ' bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20'}`}
    >
      <h1 className='px-15'>•</h1>
      {label}
    </button>
  );
};

export default MenuBtn;
