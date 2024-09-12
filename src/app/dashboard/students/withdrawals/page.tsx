'use client';

import { useWithdrawalList, useWithdrawalSearch } from '@/apis/withdrawal';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import WithdrawalList from '@/components/templates/Withdrawal/WithdrawalList';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [input, setInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const { withdrawalData, error: withdrawalError, isLoadingMore, size, setSize, isReachingEnd } = useWithdrawalList();
  const {
    withdrawalSearchData,
    error: searchError,
    isLoadingMore: isSearchingMore,
    size: searchSize,
    setSize: setSearchSize,
    isReachingEnd: isSearchReachingEnd,
  } = useWithdrawalSearch(searchKeyword);

  const dataToShow = isSearch ? withdrawalSearchData : withdrawalData;
  const isLoading = isSearch ? isSearchingMore : isLoadingMore;
  const isEndReached = isSearch ? isSearchReachingEnd : isReachingEnd;

  const handleSearch = () => {
    if (input.trim() === '') {
      setIsSearch(false);
    } else if (input !== searchKeyword || !isSearch) {
      setSearchKeyword(input);
      setIsSearch(true);
    }
  };

  useEffect(() => {
    if (input.trim() === '') {
      setIsSearch(false);
    }
  }, [input]);

  return (
    <div className='flex flex-col w-[1145px] relative'>
      <div className='flex items-center mb-32 w-[1145px]'>
        <div className='flex justify-center w-[1090px]'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>탈퇴 회원 관리</h1>
        </div>
        <div className='absolute right-0'>
          <SearchTextBox input={input} setInput={setInput} placeholder='이름 또는 학번' handleSearch={handleSearch} />
        </div>
      </div>
      <WithdrawalList
        list={dataToShow}
        isLoading={isLoading ?? false}
        isEndReached={isEndReached ?? false}
        setSize={isSearch ? setSearchSize : setSize}
      />
    </div>
  );
};

export default Page;
