'use client';
import { useHistoryList } from '@/apis/applicant';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import PrevApplicantList from '@/components/templates/Applicant/PrevApplicant/PrevApplicantList';
import { applicants } from '@/constants/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const { data: historyList, isLoading, error, mutate } = useHistoryList();

  const router = useRouter();
  console.log(historyList?.information);

  return (
    <div className='w-[1250px]'>
      <div className='flex justify-center'>
        <h1 className='H0 text-gray-grayscale50'>이전 내역</h1>
      </div>
      <BackBtn onClick={() => router.push(applicants)} label={'목록으로'} disabled={false} />
      <PrevApplicantList prevApplicantLists={historyList?.information || []} />
    </div>
  );
};

export default Page;
