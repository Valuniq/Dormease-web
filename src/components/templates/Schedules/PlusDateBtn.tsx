import React from 'react';
import PlusSquare from '@public/images/PlusSquare.svg';
import CircleArrowRight from '@public/images/CircleArrowRight.svg';

const PlusDateBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='flex flex-col items-center w-80 pt-5 pb-10'>
      <PlusSquare width={20} height={20} />
      <h3 className='Caption2 text-15 text-blue-blue30 mt-5'>일정 추가</h3>
      <div className='flex gap-5'>
        <h3 className='Caption2 text-15 text-blue-blue30'>기간 선택</h3>
        <CircleArrowRight width={17} height={17} />
      </div>
    </button>
  );
};

export default PlusDateBtn;
