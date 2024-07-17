'use client';

import { useInfiniteFaq } from '@/apis/Faq';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import FAQList from '@/components/organisms/FAQ/FAQList/FAQList';
import { FAQWritingRoutes } from '@/constants/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const { faqData, error, isLoadingMore, size, setSize, isReachingEnd } = useInfiniteFaq();

  if (error) return <div>Failed to load</div>;
  if (!faqData) return <div>Loading...</div>;

  const handleWriteClick = () => {
    router.push(FAQWritingRoutes);
  };

  return (
    <div className='w-[1200px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50'>FAQ</h1>
      <div onClick={handleWriteClick} className='ml-auto mb-15'>
        <BtnLargeVariant label={'작성하기'} disabled={false} variant={'blue'} />
      </div>
      <FAQList list={faqData} isLoading={isLoadingMore ?? false} isEndReached={isReachingEnd} setSize={setSize} />
    </div>
  );
};

export default Page;
