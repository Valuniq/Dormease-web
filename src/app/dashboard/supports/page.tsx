'use client';

import { useInfiniteSupport } from '@/apis/support';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import SupportList from '@/components/templates/Support/List/SupportList';

import { supportsWritingRoutes } from '@/constants/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const { faqData, error, isLoadingMore, size, setSize, isReachingEnd } = useInfiniteSupport();

  if (error) return <div>Failed to load</div>;
  if (!faqData) return <div>Loading...</div>;

  const handleWriteClick = () => {
    router.push(supportsWritingRoutes);
  };

  return (
    <div className='w-[1200px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50'>FAQ</h1>
      <div onClick={handleWriteClick} className='ml-auto mb-15'>
        <BtnLargeVariant label={'작성하기'} disabled={false} variant={'blue'} />
      </div>
      <SupportList list={faqData} isLoading={isLoadingMore ?? false} isEndReached={isReachingEnd} setSize={setSize} />
    </div>
  );
};

export default Page;
