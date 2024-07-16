'use client';

import { useInfiniteNotifications } from '@/apis/Notifications';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import NoticeList from '@/components/organisms/Notice/NoticeList/NoticeList';
import { NoticeWritingRoutes } from '@/constants/navigation';
import { useRouter } from 'next/navigation';

import React from 'react';

const Page = () => {
  const router = useRouter();
  const {
    notificationsData,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    mutate: mutateList,
  } = useInfiniteNotifications();

  // if (error) return <div>Failed to load</div>;
  // if (!notificationsData) return <div>Loading...</div>;

  const handleWriteClick = () => {
    router.push(NoticeWritingRoutes);
  };

  return (
    <div className='w-[1200px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50'>공지사항</h1>
      <div onClick={handleWriteClick} className='ml-auto mb-15'>
        <BtnLargeVariant label={'작성하기'} disabled={false} variant={'blue'} />
      </div>
      <NoticeList
        list={notificationsData}
        isLoading={isLoadingMore ?? false}
        isEndReached={isReachingEnd}
        setSize={setSize}
      />
    </div>
  );
};

export default Page;
