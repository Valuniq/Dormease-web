import React from 'react';
import AddBtn from '../../../../../public/images/AddBtn.png';
import Image from 'next/image';

const AddScheduleBtn: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='group flex flex-col justify-center items-center w-100 h-100 rounded-8 opacity-0 hover:opacity-100 hover:hover-transition active:bg-gray-grayscale10'
    >
      <Image className='mt-3' src={AddBtn} alt='Add' width={26} height={26} />
      <h2 className='mt-6 text-blue-blue30'>일정 추가</h2>
    </button>
  );
};

export default AddScheduleBtn;
