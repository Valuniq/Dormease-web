'use client';

import { useRequestList } from '@/apis/request';
import RequestList from '@/components/templates/Request/RequestList';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { requestIdState } from '@/recoil/request';

const Page = () => {
  const setRequestId = useSetRecoilState(requestIdState);
  const router = useRouter();
  const { requestData, error, isLoadingMore, size, setSize, isReachingEnd } = useRequestList();

  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='text-center H0 text-gray-grayscale50 text-nowrap'>요청사항</h1>
      <RequestList
        list={requestData}
        onRequestClick={(requestmentId: number) => {
          setRequestId(requestmentId);
          router.push(`/dashboard/requests/details`);
        }}
        isLoading={isLoadingMore ?? false}
        isEndReached={isReachingEnd ?? false}
        setSize={setSize}
      />
    </div>
  );
};

export default Page;
