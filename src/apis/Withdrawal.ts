import { WithdrawalMemberResponse, WithdrawalMemberResponseDataList } from '@/types/withdrawal';
import { BASE_URL } from '@/constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';

export const useWithdrawalLists = () => {
  const getKey = (pageIndex: number, previousPageData: WithdrawalMemberResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/users/management/delete?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<WithdrawalMemberResponse>(getKey, swrWithToken);

  const withdrawalData: WithdrawalMemberResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as WithdrawalMemberResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { withdrawalData, error, isLoadingMore, size, setSize, isReachingEnd };
};

export const useWithdrawalSearch = (keyword: string) => {
  const getKey = (pageIndex: number, previousPageData: WithdrawalMemberResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/users/management/delete/search?page=${pageIndex + 1}&keyword=${keyword}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<WithdrawalMemberResponse>(getKey, swrWithToken);

  const withdrawalSearchData: WithdrawalMemberResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as WithdrawalMemberResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { withdrawalSearchData, error, isLoadingMore, size, setSize, isReachingEnd };
};
