'use client';

import { useWithdrawalLists, useWithdrawalSearch } from '@/apis/Withdrawal';
import WithdrawalMemberManagementTemplate from '@/components/templates/WithdrawalMemberManagement';
import { WithdrawalMemberResponseDataList } from '@/types/withdrawal';
import React, { useEffect, useState } from 'react';

const WithdrawalMemberManagement = () => {
  const [input, setInput] = useState('');
  const { withdrawalData, error: withdrawalError, isLoadingMore, size, setSize, isReachingEnd } = useWithdrawalLists();
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

  if (withdrawalError || searchError) {
    console.error('Error fetching withdrawal Member data:', withdrawalError || searchError);
    return <div>Error loading data</div>;
  }

  const dataToShow = input ? withdrawalSearchData : withdrawalData;
  const isLoading = input ? isSearchingMore : isLoadingMore;
  const isEndReached = input ? isSearchReachingEnd : isReachingEnd;

  return (
    <WithdrawalMemberManagementTemplate
      list={dataToShow as WithdrawalMemberResponseDataList[]}
      input={input}
      setInput={setInput}
      isLoading={isLoading ?? false}
      isEndReached={isEndReached ?? false}
      setSize={input ? setSearchSize : setSize}
    />
  );
};

export default WithdrawalMemberManagement;
