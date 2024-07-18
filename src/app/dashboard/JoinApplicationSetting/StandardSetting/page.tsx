'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import CurrentStudentMethod from '@/components/organisms/StandardSetting/ScoreCalculation/CurrentStudentMethod/CurrentStudentMethod';
import FreshmanMethod from '@/components/organisms/StandardSetting/ScoreCalculation/FreshmanMethod/FreshmanMethod';
import StandardSetting from '@/components/organisms/StandardSetting/StandardSetting';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mb-54'>
        <h1 className='H0 text-gray-grayscale50'>기준 설정</h1>
      </div>
      <CurrentStudentMethod />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
      <FreshmanMethod />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
      <div className='mt-25'>
        <BtnMidVariant label={'작성완료'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default Page;
