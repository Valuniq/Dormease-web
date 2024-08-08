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

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const infiniteUser = useInfiniteUser(sortConfig.sortBy, sortConfig.isAscending);
  const userSearch = useUserSearch(searchTerm, sortConfig.sortBy, sortConfig.isAscending);

  const { userData, error, isLoadingMore, size, setSize, isEndReached, mutate } = isSearching
    ? userSearch
    : infiniteUser;

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setIsSearching(true);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setIsSearching(false);
    }
  }, [searchTerm]);

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-117'>앱 회원관리</h1>
        <SearchTextBox input={searchTerm} setInput={handleSearchChange} placeholder={'이름 또는 학번'} />
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
