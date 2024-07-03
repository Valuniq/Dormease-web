import React from 'react';
import CloseBtnSmall from '@public/images/CloseBtnSmall.svg';

const DeleteBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='flex justify-center items-center w-20 h-20 rounded-full bg-transparent text-gray-grayscale30 hover:bg-gray-grayscale10 hover:text-gray-grayscale40 hover:hover-transition active:bg-gray-grayscale20'
    >
      <CloseBtnSmall />
    </button>
  );
};

export default DeleteBtn;
