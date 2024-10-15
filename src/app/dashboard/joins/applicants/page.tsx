'use client';
import { useNowApplicant } from '@/apis/applicant';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import ApplicantList from '@/components/templates/Applicant/Applicant/ApplicantList';
import { prevApplicants } from '@/constants/navigation';
import { nowApplicationIdState } from '@/recoil/applicant';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const { data: applicantLists, isLoading, mutate, error } = useNowApplicant();
  const [applicationIdState, setApplicationIdState] = useRecoilState(nowApplicationIdState);
  const router = useRouter();
  useEffect(() => {
    setApplicationIdState(applicantLists?.information[0].dormitoryApplicationId || 0);
  }, [applicantLists]);

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-180'>신청자 명단</h1>
        <SearchTextBox
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'검색어를 입력해주세요.'}
        />
      </div>
      <ApplicantList
        applicantLists={applicantLists?.information || []}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
      />
      <div className='flex itmes-center justify-between mt-12'>
        <BackBtn onClick={() => router.push(prevApplicants)} label={'이전 내역'} disabled={false} />
        <div className='mt-16 w-278 flex items-center justify-between'>
          <BtnMidVariant label={'검사 시작'} disabled={false} variant={'blue'} />
          <BtnMidVariant label={'저장'} disabled={false} variant={'whiteblue'} />
        </div>
        <div className='w-169 flex items-center justify-between'>
          <BtnMiniVariant label={'탈락'} disabled={false} selected={false} variant={'red'} />
          <BtnMiniVariant label={'합격'} disabled={false} selected={false} variant={'blue'} />
        </div>
      </div>
    </div>
  );
};

export default Page;
