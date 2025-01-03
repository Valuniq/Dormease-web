import { WithdrawalListResponse, WithdrawalListResponseDataList } from '@/types/withdrawal';
import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWRInfinite from 'swr/infinite';

export const useWithdrawalList = () => {
  const getKey = (pageIndex: number, previousPageData: WithdrawalListResponse | null) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/users/management/delete?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<WithdrawalListResponse>(getKey, fetchWithTokens);

  const withdrawalData: WithdrawalListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as WithdrawalListResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoading = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { withdrawalData, error, isLoading, size, setSize, isEndReached };
};

export const useWithdrawalSearch = (keyword: string) => {
  const getKey = (pageIndex: number, previousPageData: WithdrawalListResponse | null) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/users/management/delete/search?page=${pageIndex + 1}&keyword=${keyword}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<WithdrawalListResponse>(getKey, fetchWithTokens);

  const withdrawalData: WithdrawalListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as WithdrawalListResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoading = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { withdrawalData, error, isLoading, size, setSize, isEndReached };
};
