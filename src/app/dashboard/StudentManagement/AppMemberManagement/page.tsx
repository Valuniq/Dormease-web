'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import AppMemberManagementList from '@/components/organisms/AppMemberManamement/AppMemberManagementList';
import { mutate } from 'swr';
import { BASE_URL } from '@/constants/path';
import { useUserSearch, useSortedUsers } from '@/apis/userManagement';

const Page = () => {
  // 기본 정렬 조건을 설정한 상태
  const [sortConfig, setSortConfig] = useState({ sortBy: 'bonusPoint', isAscending: true });
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const {
    userData: sortedUserData,
    error: sortedError,
    isLoadingMore: sortedLoadingMore,
    size: sortedSize,
    setSize: setSortedSize,
    isReachingEnd: sortedReachingEnd,
  } = useSortedUsers(sortConfig.sortBy, sortConfig.isAscending);

  const {
    userData: searchUserData,
    error: searchError,
    isLoadingMore: searchLoadingMore,
    size: searchSize,
    setSize: setSearchSize,
    isReachingEnd: searchReachingEnd,
  } = useUserSearch(searchTerm);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (isSearching && !searchLoadingMore && !searchReachingEnd) {
          setSearchSize((prevSize: number) => prevSize + 1);
        } else if (!isSearching && !sortedLoadingMore && !sortedReachingEnd) {
          setSortedSize((prevSize: number) => prevSize + 1);
        }
      }
    },
    [
      isSearching,
      searchLoadingMore,
      searchReachingEnd,
      sortedLoadingMore,
      sortedReachingEnd,
      setSearchSize,
      setSortedSize,
    ],
  );

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(handleObserver);
    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
  }, [handleObserver]);

  // 정렬 조건 변경 시 페이지를 초기화하고 데이터를 다시 불러오기
  useEffect(() => {
    if (!isSearching) {
      setSortedSize(1); // 페이지 초기화
      mutate(
        `${BASE_URL}/api/v1/web/users/management/sort?sortBy=${sortConfig.sortBy}&isAscending=${sortConfig.isAscending}&page=1`,
        undefined,
        { revalidate: true },
      );
    }
  }, [sortConfig, setSortedSize, isSearching]);

  // 검색어 변경 시 페이지를 초기화하고 데이터를 다시 불러오기
  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
      setSearchSize(1); // 검색어 변경 시 페이지 초기화
      mutate(`${BASE_URL}/api/v1/web/users/management/search?keyword=${searchTerm}&page=1`, undefined, {
        revalidate: true,
      });
    } else {
      setIsSearching(false);
      setSortedSize(1); // 검색어가 없을 때 페이지 초기화
      mutate(
        `${BASE_URL}/api/v1/web/users/management/sort?sortBy=${sortConfig.sortBy}&isAscending=${sortConfig.isAscending}&page=1`,
        undefined,
        { revalidate: true },
      );
    }
  }, [searchTerm, setSearchSize, setSortedSize, sortConfig]);

  const handleSort = (sortBy: string) => {
    setSortConfig((prevConfig) => ({
      sortBy,
      isAscending: prevConfig.sortBy === sortBy ? !prevConfig.isAscending : true,
    }));
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const isLoadingMore = isSearching ? searchLoadingMore : sortedLoadingMore;
  const isReachingEnd = isSearching ? searchReachingEnd : sortedReachingEnd;
  const userData = isSearching ? searchUserData : sortedUserData;

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-117'>앱 회원관리</h1>
        <SearchTextBox input={searchTerm} setInput={handleSearchChange} placeholder={'이름 또는 학번'} />
      </div>
      <AppMemberManagementList
        appMemberManagementLists={userData}
        plusSort={sortConfig.sortBy === 'bonusPoint' && sortConfig.isAscending}
        setPlusSort={() => handleSort('bonusPoint')}
        minusSort={sortConfig.sortBy === 'minusPoint' && sortConfig.isAscending}
        setMinusSort={() => handleSort('minusPoint')}
        creationDateSort={sortConfig.sortBy === 'createdDate' && sortConfig.isAscending}
        setCreationDateSort={() => handleSort('createdDate')}
      />
      <div ref={loadMoreRef} className='flex justify-center mt-4'>
        {isLoadingMore && <span>Loading...</span>}
        {isReachingEnd && <span>No more data</span>}
      </div>
    </div>
  );
};

export default Page;
