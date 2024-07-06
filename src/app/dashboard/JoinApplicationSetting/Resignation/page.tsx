'use client';
import React, { useState } from 'react';
import ResignationList from '@/components/organisms/Resignation/ResignationList';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import { useResignationList } from '@/apis/Resignation';
import InfiniteScroll from '@/hooks/useInfiniteScroll';

const Resignation = () => {
  const { resignationData, error: withdrawalError, isLoadingMore, size, setSize, isReachingEnd } = useResignationList();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  console.log(checkedItems);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id) ? prevCheckedItems.filter((item) => item !== id) : [...prevCheckedItems, id],
    );
  };

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
        </div>
      </div>
      <InfiniteScroll
        isLoading={isLoadingMore || false}
        isReachingEnd={isReachingEnd}
        loadMore={() => {
          setSize(size + 1);
        }}
      >
        <ResignationList
          list={resignationData}
          checkedItems={checkedItems}
          handleCheckboxChange={handleCheckboxChange}
        />
      </InfiniteScroll>
      <div className='mt-21 flex justify-end gap-14'>
        <BtnMidVariant label='지급불가' disabled={!false} variant='red' />
        <BtnMidVariant label='지급하기' disabled={!false} variant='blue' />
      </div>
    </div>
  );
};

export default Resignation;
