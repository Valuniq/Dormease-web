'use client';
import RequestList from '@/components/organisms/Request/RequestList';
import React from 'react';

const Request = () => {
  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='text-center H0 text-gray-grayscale50 text-nowrap'>요청사항</h1>
      <RequestList list={[]} onRequestClick={(index: number) => index} />
    </div>
  );
};

export default Request;
