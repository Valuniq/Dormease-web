'use client';

import { useRequestList } from '@/apis/Request';
import RequestList from '@/components/organisms/Request/RequestList';
import InfiniteScroll from '@/hooks/useInfiniteScroll';
import React from 'react';
import { useRouter } from 'next/navigation';

const Request = () => {
  const router = useRouter();
  const { requestData, error: requestError, isLoadingMore: isLoading, size, setSize, isReachingEnd } = useRequestList();

  return (
    <InfiniteScroll isLoading={requestError} isReachingEnd={isReachingEnd} loadMore={() => setSize(size + 1)}>
      <div className='flex flex-col w-[1200px]'>
        <h1 className='text-center H0 text-gray-grayscale50 text-nowrap'>요청사항</h1>
        <RequestList
          list={requestData}
          onRequestClick={(requestmentId: number) => {
            router.push(`/dashboard/Request/${requestmentId}`);
          }}
        />
      </div>
      {isLoading && <></>}
    </InfiniteScroll>
  );
};

export default Request;
