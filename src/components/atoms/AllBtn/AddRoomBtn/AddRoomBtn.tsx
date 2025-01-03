import React from 'react';
import PlusBtnBig from '@public/images/PlusBtnBig.svg';

const AddRoomBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      title='새로 만들기'
      className='group flex flex-col justify-center items-center w-142 h-76 rounded-full bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10'
    >
      <div className='flex justify-center items-center w-33 h-33 rounded-3 bg-gray-grayscale20 group-active:bg-gray-grayscale30'>
        <PlusBtnBig className='text-white group-hover:text-gray-grayscale5 group-hover:hover-transition group-active:text-gray-grayscale10' />
      </div>
      <h2 className='caption-2 mt-5 text-gray-grayscale40'>층 추가</h2>
    </button>
  );
};

export default AddRoomBtn;
