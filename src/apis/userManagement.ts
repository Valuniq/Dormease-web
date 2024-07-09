import { BASE_URL } from './../constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';
import { userResponse, userResponseDataList } from '@/types/userManagement';
export const useInfiniteUser = () => {
  const getKey = (pageIndex: number, previousPageData: userResponse) => {
    // 이전 페이지 데이터가 없고, 첫 번째 페이지를 로드하는 경우
    if (pageIndex === 0) return `${BASE_URL}/api/v1/web/users/management?page=1`;

    // 이전 페이지 데이터가 비어있으면 더 이상 요청하지 않음
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;

    // 다음 페이지 요청
    return `${BASE_URL}/api/v1/web/users/management?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite<userResponse>(getKey, swrWithToken, {
    initialSize: 1, // 처음에 1개의 페이지만 로드
  });

  const userData: userResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as userResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && isValidating && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { userData, error, isLoadingMore, size, setSize, isReachingEnd, mutate };
};
export const useSortedUsers = (sortBy: string = 'bonusPoint', isAscending: boolean = true) => {
  const getKey = (pageIndex: number, previousPageData: userResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/users/management/sort?sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<userResponse>(getKey, swrWithToken, {
    initialSize: 1, // 처음에 1개의 페이지만 로드
  });

  const userData: userResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as userResponseDataList[])
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

  return { userData, error, isLoadingMore, size, setSize, isReachingEnd, mutate };
};

export const useUserSearch = (keyword: string) => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/users/management/search?keyword=${keyword}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite(getKey, swrWithToken, {
    initialSize: 1, // 처음에 1개의 페이지만 로드
  });

  const userData = data ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), []) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage);

  return { userData, error, isLoadingMore, size, setSize, isReachingEnd, mutate };
};

export default useUserSearch;
