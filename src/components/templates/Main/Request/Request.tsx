'use client';
import { useMainRequest } from '@/apis/main';
import { requests, requestsDetail } from '@/constants/navigation';
import { requestIdState } from '@/recoil/request';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import RequestList from './RequestList';

const Request = () => {
  const { data, isLoading, error } = useMainRequest();
  const setRequestId = useSetRecoilState(requestIdState);

  return (
    <div className='font-pretendard w-514 h-574'>
      <div className='flex items-center justify-between mb-3'>
        <span className='font-semibold text-24 text-gray-grayscale40 pl-15'>요청사항</span>
        <Link href={requests} passHref>
          <span className='font-normal text-blue-blue40 text-17 underline'>바로가기</span>
        </Link>
      </div>
      <div className='w-full flex bg-white h-560 rounded-30 overflow-y-scroll'>
        {isLoading ? (
          <div className='H2 text-gray-grayscale30 my-auto mx-auto'>로딩 중...</div>
        ) : error ? (
          <div className='H2 text-red-red30  my-auto mx-auto'>에러가 발생했습니다. 다시 시도해주세요.</div>
        ) : !data || data.information.length === 0 ? (
          <div className='H2 text-gray-grayscale30  my-auto mx-auto'>아직 요청사항이 없습니다.</div>
        ) : (
          <div>
            {data.information.map((i, index) => (
              <Link key={index} href={requestsDetail} passHref>
                <ul className='mb-20 flex justify-center' onClick={() => setRequestId(i.requestmentId)}>
                  <RequestList content={i.title} date={i.createdDate} />
                </ul>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;
