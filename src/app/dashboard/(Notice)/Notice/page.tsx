'use client';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import NoticeList from '@/components/organisms/Notice/NoticeList/NoticeList';
import { noticeList } from '@/types/notice';
import React from 'react';

type Props = {
  pageNum: number;
  pageTotalNum: number;
  setPageNum: (navigation: 'prev' | 'next') => void;
  noticeLists: noticeList[];
};

const page = ({ pageNum, pageTotalNum, setPageNum, noticeLists }: Props) => {
  return (
    <div className='w-[1200px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50'>공지사항</h1>
      <div className='ml-auto mb-15'>
        <BtnLargeVariant label={'작성하기'} disabled={false} variant={'blue'} />
      </div>
      <NoticeList noticeLists={noticeLists} />
      <div className='mt-27 flex justify-center'>
        <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      </div>
    </div>
  );
};

export default page;
