import React from 'react';
import FileBtn from '../../../../../public/images/FileBtn.svg';

type Props = {
  label: string;
};

const CheckFileBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='flex items-center justify-center w-124 h-30 rounded-8 bg-gray-grayscale5 text-gray-grayscale50 hover:text-white hover:bg-blue-blue30 active:text-white active:bg-blue-blue50'
    >
      {label}
      <FileBtn className='ml-8' />
    </button>
  );
};

export default CheckFileBtn;
