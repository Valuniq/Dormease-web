import React from 'react';
import PlusBtnBig from '../../../../../public/images/PlusBtnBig.svg';

const AddRoomBtn: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='group flex flex-col justify-center items-center w-142 h-76 rounded-full bg-white hover:bg-gray-grayscale5 active:bg-gray-grayscale10'
    >
      <div className='flex justify-center items-center w-33 h-33 rounded-3 bg-gray-grayscale20 group-active:bg-gray-grayscale30'>
        <PlusBtnBig className='text-white group-hover:text-gray-grayscale5 group-active:text-gray-grayscale10' />
      </div>
      <h2 className='mt-5 text-gray-grayscale40'>호실 개수 추가</h2>
    </button>
  );
};

export default AddRoomBtn;
