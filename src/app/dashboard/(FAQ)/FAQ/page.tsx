'use client';
import { useInfiniteFaq } from '@/apis/Faq';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import FAQList from '@/components/organisms/FAQ/FAQList';
import React from 'react';

const page = () => {
  const { faqData, error, isLoadingMore, size, setSize, isReachingEnd } = useInfiniteFaq();

  if (error) return <div>Failed to load</div>;
  if (!faqData) return <div>Loading...</div>;

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && size > 1) {
      setSize(size - 1);
    } else if (direction === 'next' && !isReachingEnd) {
      setSize(size + 1);
    }
  };
  return (
    <div className='w-[1200px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50'>FAQ</h1>
      <div className='ml-auto mb-15'>
        <BtnLargeVariant label={'작성하기'} disabled={false} variant={'blue'} />
      </div>
      <FAQList faqLists={faqData} />
      <div className='mt-27 flex justify-center'>
        <Pagination pageNum={size} pageTotalNum={10} setPageNum={handlePageChange} />
      </div>
    </div>
  );
};

export default page;
