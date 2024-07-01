'use client';
import React from 'react';
import ResignationList from '@/components/organisms/Resignation/ResignationList';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';

const Resignation = () => {
  return (
    <div className='flex flex-col w-[1200px]'>
      <div className='flex justify-between items-center mb-32'>
        <h1 className='H0 text-gray-grayscale50 text-nowrap'>퇴사 확인서 제출 명단</h1>
        <div className='flex gap-38 items-end'>
          <DatePicker
            title='제출 기간'
            startDate={undefined}
            endDate={undefined}
            setStartDate={function (startDate: Date): void {
              throw new Error('Function not implemented.');
            }}
            setEndDate={function (endDate: Date): void {
              throw new Error('Function not implemented.');
            }}
            handlePosting={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <BtnLargeVariant label='삭제' disabled={!false} variant='red' />
        </div>
      </div>
      <ResignationList
        list={[]}
        onStudentClick={(schoolNumber: string) => schoolNumber}
        setIsChecked={(isChecked: boolean) => isChecked}
        isAllChecked={false}
        setIsAllChecked={(isChecked: boolean) => isChecked}
      />
      <div className='mt-21 flex justify-end gap-14'>
        <BtnMidVariant label='지급불가' disabled={!false} variant='blue' />
        <BtnMidVariant label='지급하기' disabled={!false} variant='red' />
      </div>
    </div>
  );
};

export default Resignation;
