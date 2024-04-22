import React from 'react';
import PrevBtn from '@public/images/PrevBtn.svg';
import NextBtn from '@public/images/NextBtn.svg';

type Props = {
  pageNum: number;
  pageTotalNum: number;
  setPageNum: (navigation: 'prev' | 'next') => void;
};

const Pagination = ({ pageNum, pageTotalNum, setPageNum }: Props) => {
  return (
    <div className='flex items-center gap-27'>
      <button disabled={!(pageNum > 1)} className='group' onClick={() => setPageNum('prev')}>
        <PrevBtn className='text-blue-blue30 group-disabled:text-blue-blue20' />
      </button>
      <div className='caption1 text-gray-grayscale40 pt-1'>{pageNum}</div>
      <button disabled={!(pageNum < pageTotalNum)} className='group' onClick={() => setPageNum('next')}>
        <NextBtn className='text-blue-blue30 group-disabled:text-blue-blue20' />
      </button>
    </div>
  );
};

export default Pagination;
