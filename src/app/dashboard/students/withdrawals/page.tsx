'use client';

import { useWithdrawalList, useWithdrawalSearch } from '@/apis/withdrawal';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import WithdrawalList from '@/components/templates/Withdrawal/WithdrawalList';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [input, setInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const withdrawalList = useWithdrawalList();
  const withdrawalSearch = useWithdrawalSearch(searchKeyword);

  const { withdrawalData, isLoading, setSize, isEndReached } = isSearch ? withdrawalSearch : withdrawalList;

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
        list={withdrawalData}
        isLoading={isLoading ?? false}
        isEndReached={isEndReached}
        setSize={setSize}
      />
    </div>
  );
};

export default Page;
