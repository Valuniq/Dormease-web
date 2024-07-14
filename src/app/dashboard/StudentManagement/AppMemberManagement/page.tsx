'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import AppMemberManagementList from '@/components/organisms/AppMemberManamement/AppMemberManagementList';
import { BASE_URL } from '@/constants/path';
import { useInfiniteUser, useSortedUsers, useUserSearch } from '@/apis/AppUserManagement';

const Page = () => {
  const [sortConfig, setSortConfig] = useState<{
    sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate' | undefined;
    isAscending: boolean | undefined;
  }>({
    sortBy: undefined,
    isAscending: undefined,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const {
    userData: sortedUserData,
    error: sortedError,
    isLoadingMore: sortedLoadingMore,
    size: sortedSize,
    setSize: setSortedSize,
    isReachingEnd: sortedReachingEnd,
    mutate: mutateSorted,
  } = useSortedUsers(sortConfig.sortBy, sortConfig.isAscending);

  const {
    userData: searchUserData,
    error: searchError,
    isLoadingMore: searchLoadingMore,
    size: searchSize,
    setSize: setSearchSize,
    isReachingEnd: searchReachingEnd,
    mutate: mutateSearch,
  } = useUserSearch(searchTerm);

  const {
    userData: defaultUserData,
    error: defaultError,
    isLoadingMore: defaultLoadingMore,
    size: defaultSize,
    setSize: setDefaultSize,
    isReachingEnd: defaultReachingEnd,
    mutate: mutateDefault,
  } = useInfiniteUser();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (isSearching && !searchLoadingMore && !searchReachingEnd) {
          setSearchSize((prevSize: number) => prevSize + 1);
        } else if (!isSearching && sortConfig.sortBy && !sortedLoadingMore && !sortedReachingEnd) {
          setSortedSize((prevSize: number) => prevSize + 1);
        } else if (!isSearching && !sortConfig.sortBy && !defaultLoadingMore && !defaultReachingEnd) {
          setDefaultSize((prevSize: number) => prevSize + 1);
        }
      }
    },
    [
      isSearching,
      searchLoadingMore,
      searchReachingEnd,
      sortedLoadingMore,
      sortedReachingEnd,
      defaultLoadingMore,
      defaultReachingEnd,
      setSearchSize,
      setSortedSize,
      setDefaultSize,
      sortConfig.sortBy,
    ],
  );

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(handleObserver);
    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
  }, [handleObserver]);

  useEffect(() => {
    if (!isSearching && sortConfig.sortBy === undefined) {
      setDefaultSize(1);
      mutateDefault();
    }
  }, [sortConfig.sortBy, isSearching, setDefaultSize, mutateDefault]);

  useEffect(() => {
    if (sortConfig.sortBy !== undefined && !isSearching) {
      setSortedSize(1);
      mutateSorted();
    }
  }, [sortConfig, setSortedSize, isSearching, mutateSorted]);

  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
      setSearchSize(1);
      mutateSearch();
    } else {
      setIsSearching(false);
      if (sortConfig.sortBy) {
        setSortedSize(1);
        mutateSorted();
      } else {
        setDefaultSize(1);
        mutateDefault();
      }
    }
  }, [
    searchTerm,
    setSearchSize,
    setSortedSize,
    setDefaultSize,
    sortConfig.sortBy,
    mutateSearch,
    mutateSorted,
    mutateDefault,
  ]);

  const handleSort = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    setSortConfig((prevConfig) => {
      if (prevConfig.sortBy === sortBy) {
        if (prevConfig.isAscending === undefined) {
          return { sortBy, isAscending: true };
        } else if (prevConfig.isAscending === true) {
          return { sortBy, isAscending: false };
        } else {
          return { sortBy: undefined, isAscending: undefined };
        }
      } else {
        return { sortBy, isAscending: true };
      }
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const isLoadingMore = isSearching ? searchLoadingMore : sortConfig.sortBy ? sortedLoadingMore : defaultLoadingMore;
  const isReachingEnd = isSearching ? searchReachingEnd : sortConfig.sortBy ? sortedReachingEnd : defaultReachingEnd;
  const userData = isSearching ? searchUserData : sortConfig.sortBy ? sortedUserData : defaultUserData;

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-117'>앱 회원관리</h1>
        <SearchTextBox input={searchTerm} setInput={handleSearchChange} placeholder={'이름 또는 학번'} />
      </div>
      <AppMemberManagementList appMemberManagementLists={userData} sortConfig={sortConfig} setSortConfig={handleSort} />
      <div ref={loadMoreRef} className='flex justify-center mt-4'>
        {isLoadingMore && <span>Loading...</span>}
        {isReachingEnd && <span>No more data</span>}
      </div>
    </div>
  );
};

export default Page;
