'use client';
import React, { useState, useEffect } from 'react';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';

import { useInfiniteUser, useUserSearch } from '@/apis/appMember';
import AppMemberList from '@/components/templates/AppMember/AppMemberList';

const Page = () => {
  const [sortConfig, setSortConfig] = useState<{
    sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate';
    isAscending: boolean;
  }>({
    sortBy: 'createdDate',
    isAscending: false,
  });
  const [input, setInput] = useState(''); // 검색 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태
  const [isSearch, setIsSearch] = useState(false); // 검색 활성화 여부 상태

  // 검색어 핸들러
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

  const infiniteUser = useInfiniteUser(sortConfig.sortBy, sortConfig.isAscending);
  const userSearch = useUserSearch(searchKeyword, sortConfig.sortBy, sortConfig.isAscending);

  const { userData, error, isLoadingMore, size, setSize, isEndReached, mutate } = isSearch ? userSearch : infiniteUser;

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-117'>앱 회원관리</h1>
        <SearchTextBox input={input} setInput={setInput} handleSearch={handleSearch} placeholder={'이름 또는 학번'} />
      </div>
      <AppMemberList
        appMemberManagementLists={userData}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        isLoading={isLoadingMore ?? false}
        isEndReached={isEndReached}
        setSize={setSize}
      />
    </div>
  );
};

export default Page;
