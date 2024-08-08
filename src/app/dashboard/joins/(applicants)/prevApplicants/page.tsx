'use client';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import PrevApplicantList from '@/components/templates/Applicant/PrevApplicant/PrevApplicantList';
import React from 'react';
import { dummy } from './dummy';

const Page = () => {
  return (
    <div className='w-[1250px]'>
      <div className='flex justify-center'>
        <h1 className='H0 text-gray-grayscale50'>이전 내역</h1>
      </div>
      <BackBtn label={'목록으로'} disabled={false} />
      <PrevApplicantList prevApplicantLists={dummy} />
    </div>
  );
};

export default Page;
