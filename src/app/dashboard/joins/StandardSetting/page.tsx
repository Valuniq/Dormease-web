'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import AcceptanceMethod from '@/components/organisms/StandardSetting/AcceptanceMethod/AcceptanceMethod';
import PledgeWriting from '@/components/organisms/StandardSetting/PledgeWriting/PledgeWriting';
import CurrentStudentMethod from '@/components/organisms/StandardSetting/ScoreCalculation/CurrentStudentMethod/CurrentStudentMethod';
import FreshmanMethod from '@/components/organisms/StandardSetting/ScoreCalculation/FreshmanMethod/FreshmanMethod';

import React from 'react';

const Page = () => {
  return (
    <div className='w-[1200px] flex flex-col justify-center items-center'>
      <div className='mb-54'>
        <h1 className='H0 text-gray-grayscale50'>기준 설정</h1>
      </div>
      <CurrentStudentMethod />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
      <FreshmanMethod />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
      <AcceptanceMethod />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
      <div className='w-full'>
        <PledgeWriting
          setEditorHtml={function (content: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <div className='mt-100 mb-47'>
        <BtnMidVariant label={'작성완료'} disabled={true} variant={'blue'} />
      </div>
    </div>
  );
};

export default Page;
