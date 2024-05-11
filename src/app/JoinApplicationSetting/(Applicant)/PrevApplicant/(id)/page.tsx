import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import ApplicantList from '@/components/organisms/Applicant/ApplicantList';
import React from 'react';

const page = () => {
  return (
    <div className='w-[1250px]'>
      <div className='flex justify-start'>
        <h1 className='H1 text-gray-grayscale50'>제목</h1>
      </div>
      <div className='flex justify-end mb-16'>
        <SearchTextBox
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'검색어를 입력해주세요.'}
        />
      </div>
      <ApplicantList
        applicantLists={[]}
        isAllChecked={false}
        setIsAllChecked={function (isAllChecked: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className='mt-30'>
        <BackBtn label={'뒤로가기'} disabled={false} />
      </div>
    </div>
  );
};

export default page;
