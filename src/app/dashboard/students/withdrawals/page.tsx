'use client';

import { useWithdrawalList, useWithdrawalSearch } from '@/apis/withdrawal';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import WithdrawalList from '@/components/templates/Withdrawal/WithdrawalList';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [input, setInput] = useState('');
  const { withdrawalData, error: withdrawalError, isLoadingMore, size, setSize, isReachingEnd } = useWithdrawalList();
  const {
    withdrawalSearchData,
    error: searchError,
    isLoadingMore: isSearchingMore,
    size: searchSize,
    setSize: setSearchSize,
    isReachingEnd: isSearchReachingEnd,
  } = useWithdrawalSearch(input);

  useEffect(() => {
    if (input) {
      setSearchSize(1);
    }
  }, [input, setSearchSize]);

  const dataToShow = input ? withdrawalSearchData : withdrawalData;
  const isLoading = input ? isSearchingMore : isLoadingMore;
  const isEndReached = input ? isSearchReachingEnd : isReachingEnd;

  return (
    <div className='flex flex-col w-[1145px] relative'>
      <div className='flex items-center mb-32'>
        <div className='flex justify-center w-[1090px]'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>탈퇴 회원 관리</h1>
        </div>
        {dataToShow && (
          <div className='absolute right-0'>
            <SearchTextBox input={input} setInput={setInput} placeholder='이름 또는 학번' />
          </div>
        )}
      </div>
      <WithdrawalList
        list={dataToShow}
        isLoading={isLoading ?? false}
        isEndReached={isEndReached ?? false}
        setSize={input ? setSearchSize : setSize}
      />
    </div>
  );
};

export default Page;
