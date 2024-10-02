'use client';

import { useIsJoinPeriod, useJoinHistory, useNowJoin } from '@/apis/join';
import Edit from '@/components/templates/Join/Edit/Edit';
import Writing from '@/components/templates/Join/Writing/Writing';
import React from 'react';

const Page = () => {
  // 입사 신청 기간 조회
  const { data: isJoinPeriod, isLoading: isLoadingPeriod } = useIsJoinPeriod();
  // 이전 입사 신청 내역 조회
  const { data: nowJoin, isLoading: isLoadingHistory } = useNowJoin();

  // 로딩 중일 때
  if (isLoadingPeriod || isLoadingHistory) {
    return <div className='flex flex-col w-[1483px]'>Loading...</div>; // 로딩 상태를 표시
  }

  // 작성된 내용이 있는 경우
  if (nowJoin) {
    if (isJoinPeriod?.information?.isPeriod) {
      // 작성된 내용이 있고, 입사 신청 기간일 때: 가져오기
      return (
        <div className='flex flex-col w-[1483px]'>
          {' '}
          <Edit />
        </div>
      );
    } else {
      // 작성된 내용이 있고, 입사 신청 기간이 아닐 때: 수정하기
      return (
        <div className='flex flex-col w-[1483px]'>
          <Edit />
        </div>
      );
    }
  } else {
    // 작성된 내용이 없는 경우: 작성하기
    return (
      <div className='flex flex-col w-[1483px]'>
        <Writing />
      </div>
    );
  }
};

export default Page;
