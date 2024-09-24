import React from 'react';
import PlusSquare from '@public/images/PlusSquare.svg';
import CircleArrowRight from '@public/images/CircleArrowRight.svg';

const PlusDateBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='flex flex-col items-center w-100 pt-15 pb-20'>
      <PlusSquare />
      <h3 className='Caption2 text-blue-blue30 mt-10'>일정 추가</h3>
      <div className='flex gap-5'>
        <h3 className='Caption2 text-blue-blue30'>기간 선택</h3>
        <CircleArrowRight />
      </div>
    </button>
  );
};

export default PlusDateBtn;
