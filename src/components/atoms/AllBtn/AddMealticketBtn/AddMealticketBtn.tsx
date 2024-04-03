import React from 'react';
import PlusBtnBlack from '@public/images/PlusBtnBlack.svg';

const AddMealticketBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='group flex flex-col justify-center items-center w-74 h-74 rounded-8 bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10'
    >
      <div className='flex justify-center items-center mt-5 w-22 h-22 rounded-3 border-2 border-gray-grayscale50'>
        <PlusBtnBlack />
      </div>
      <h2 className='mt-5 text-gray-grayscale50'>추가하기</h2>
    </button>
  );
};

export default AddMealticketBtn;
