'use client';

import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import JoinSettingInputText from '@/components/atoms/InputText/JoinSettingInputText/JoinSettingInputText';
import JoinHistoryList from '@/components/templates/Join/JoinHistory/JoinHistoryList';
import React from 'react';
import Default from '@/components/templates/Join/Default/Default';
import TicketPrice from '@/components/templates/Join/TicketPrice/TicketPrice';
import JoinDorm from '@/components/templates/Join/Detail/JoinDorm/JoinDorm';
import BuildingPrice from '@/components/templates/Join/Detail/BuildingPrice/BuildingPrice';

const Page = () => {
  return (
    <div className='flex flex-col w-[1483px]'>
      <div className='H0 text-gray-grayscale50 flex items-center justify-center mb-32'>
        <h1>입사 신청 설정</h1>
      </div>
      <div className='flex itmes-center mb-27'>
        <h2 className='H4 text-gray-grayscale40 whitespace-nowrap mr-100'>제목</h2>
        <JoinSettingInputText
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'제목을 입력하세요.'}
        />
      </div>
      {/* 입사 신청 기본 설정 */}
      <Default />
      <div className='H4 w-full h-464'>
        <div className='w-full h-48 flex items-center justify-center border-y-1 border-y-gray-grayscale30'>
          <div className='w-[285px] h-full flex items-center justify-center border-r-1 border-r-gray-grayscale30'>
            수용 가능 인원
          </div>
          <div className='w-[838px] h-full flex items-center justify-center text-center border-r-1 border-r-gray-grayscale30'>
            건물별 가격
          </div>
          <div className='w-[313px] h-full flex items-center justify-around'>
            <span>식권</span>
            <span>식권 가격</span>
          </div>
        </div>
        <div className='w-full h-415 flex overflow-y-scroll'>
          {/* 기숙사/인실/성별 별 수용 가능 인원 */}
          <div className='w-[285px] h-full flex flex-col items-center pt-34 pr-16'>
            <JoinDorm />
          </div>
          {/* 중간 divider */}
          <div className='w-1 h-full bg-gray-grayscale30 sticky top-0' />
          {/* 건물별 가격 */}
          <div className='w-[838px] h-full flex items-start justify-around p-9'>
            <BuildingPrice />
          </div>
          {/* 중간 divider */}
          <div className='w-1 h-full bg-gray-grayscale30 sticky top-0' />
          {/* 식권/식권 가격 */}
          <div className='w-[313px] px-10 h-full'>
            <TicketPrice />
          </div>
        </div>
      </div>
      <div className='mb-30'>
        <JoinHistoryList />
      </div>
      <div className='flex items-center justify-center w-full'>
        <BtnMidVariant label={'작성 완료'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default Page;
