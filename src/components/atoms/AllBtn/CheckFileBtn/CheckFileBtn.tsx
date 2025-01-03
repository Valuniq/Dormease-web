import React from 'react';
import FileBtn from '@public/images/FileBtn.svg';

type Props = {
  label: string;
  font?: string;
};

const CheckFileBtn = ({ label, font, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`${font ? font : 'H4'} whitespace-nowrap px-10 flex items-center justify-center w-124 h-30 rounded-8 bg-gray-grayscale5 text-gray-grayscale50 hover:text-white hover:bg-blue-blue30 hover:hover-transition active:text-white active:bg-blue-blue50`}
    >
      {label}
      <FileBtn className='ml-8' />
    </button>
  );
};

export default CheckFileBtn;
