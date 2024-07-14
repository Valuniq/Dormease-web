'use client';

import { useRequestList } from '@/apis/Request';
import RequestList from '@/components/organisms/Request/RequestList';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { requestIdState } from '@/recoil/request';

const Request = () => {
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
          router.push(`/dashboard/Request/Detail`);
        }}
        isLoading={isLoadingMore ?? false}
        isEndReached={isReachingEnd ?? false}
        setSize={setSize}
      />
    </div>
  );
};

export default Request;
