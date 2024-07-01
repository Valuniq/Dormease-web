'use client';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import { noticeList } from '@/types/notice';
import React from 'react';

type Props = {
  pageNum: number;
  pageTotalNum: number;
  //   setPageNum: (navigation: 'prev' | 'next') => void;
  noticeLists: noticeList[];
};

const index = ({ pageNum, pageTotalNum, noticeLists }: Props) => {
  return (
    <>
      <div className='ml-auto mb-15'>
        <BtnLargeVariant label={'작성하기'} disabled={false} variant={'blue'} />
      </div>
      {noticeLists}
      {/* <div className='mt-27 flex justify-center'>
        <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      </div> */}
    </>
  );
};

export default index;
