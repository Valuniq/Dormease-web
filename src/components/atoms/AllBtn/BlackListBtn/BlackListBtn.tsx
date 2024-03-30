import React from 'react';
import PlusBtn from '../../../../../public/images/PlusBtn.svg';

type Props = {
  label: string;
};

const BlackListBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='flex items-center w-130 h-31 rounded-8 bg-white text-gray-grayscale50 hover:text-white hover:bg-gray-grayscale40 active:text-white active:bg-gray-grayscale50'
    >
      <PlusBtn className='ml-9 mr-6' />
      {label}
    </button>
  );
};

export default BlackListBtn;
