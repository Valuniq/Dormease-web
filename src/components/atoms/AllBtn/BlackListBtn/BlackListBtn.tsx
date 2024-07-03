import React from 'react';
import PlusBtn from '@public/images/PlusBtn.svg';

type Props = {
  label: string;
};

const BlackListBtn = ({ label, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='H4 flex items-center w-130 h-31 rounded-8 bg-gray-grayscale20 text-gray-grayscale50 hover:text-white hover:bg-gray-grayscale40 hover:hover-transition active:text-white active:bg-gray-grayscale50'
    >
      <PlusBtn className='ml-9 mr-6' />
      {label}
    </button>
  );
};

export default BlackListBtn;
