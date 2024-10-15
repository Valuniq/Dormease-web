'use client';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PrevApplicantDetailList from '@/components/templates/Applicant/PrevApplicantDetail/PrevApplicantDetailList';
import { prevApplicants } from '@/constants/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();
  return (
    <div className='w-[1305px] flex flex-col gap-30'>
      <div className='flex justify-between items-end'>
        <h1 className='H1 text-gray-grayscale50'>2024학년도 2학기 재학생, 복학생, 대학원생 입사 신청 안내 </h1>
        <SearchTextBox
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'이름 또는 학번'}
        />
      </div>
      <PrevApplicantDetailList applicantLists={[]} />
      <BackBtn onClick={() => router.push(prevApplicants)} label={'뒤로가기'} disabled={false} />
    </div>
  );
};

export default page;
