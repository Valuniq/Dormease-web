'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import StandardSetting from '@/components/organisms/StandardSetting/StandardSetting';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mb-54'>
        <h1 className='H0 text-gray-grayscale50'>기준 설정</h1>
      </div>
      <StandardSetting
        isSmokingOn={false}
        setIsSmokingOn={function (isSmokingOn: boolean): void {
          throw new Error('Function not implemented.');
        }}
        isSamePeriodOn={false}
        setIsSamePeriodOn={function (isSamePerioOn: boolean): void {
          throw new Error('Function not implemented.');
        }}
        isPointOn={false}
        setIsPointOn={function (isPointOn: boolean): void {
          throw new Error('Function not implemented.');
        }}
        isPriorityOn={false}
        setIsPriorityOn={function (isPriorityOn: boolean): void {
          throw new Error('Function not implemented.');
        }}
        isMovingOn={false}
        setIsMovingOn={function (isMovingOn: boolean): void {
          throw new Error('Function not implemented.');
        }}
        scores={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]}
        inputs={[]}
        setInput={function (index: number, value: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className='mt-25'>
        <BtnMidVariant label={'작성완료'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default page;
