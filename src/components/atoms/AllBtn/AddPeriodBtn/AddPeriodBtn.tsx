import React from 'react';
import PlusBtnBig from '@public/images/PlusBtnBig.svg';

const AddPeriodBtn = ({ ...props }: React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='group text-white flex flex-col items-center'>
      <div className='flex justify-center items-center w-47 h-47 rounded-full bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50'>
        <PlusBtnBig />
      </div>
      <h2 className='caption-2 mt-7 w-89 px-14 py-7 rounded-20 bg-blue-blue30 group-hover:bg-blue-blue40 group-hover:hover-transition group-active:bg-blue-blue50'>
        거주 기간 추가
      </h2>
    </button>
  );
};

export default AddPeriodBtn;
