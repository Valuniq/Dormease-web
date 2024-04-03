import React from 'react';
import CloseBtnRed from '@public/images/CloseBtnRed.svg';

const PromptOutBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='flex justify-center items-center w-32 h-32 rounded-full bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20'
    >
      <CloseBtnRed />
    </button>
  );
};

export default PromptOutBtn;
