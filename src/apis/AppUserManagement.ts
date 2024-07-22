import { BASE_URL } from '../constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';
import { userResponse, userResponseDataList } from '@/types/userManagement';

export const useInfiniteUser = (sortBy: string = 'createdDate', isAscending: boolean = false) => {
  const getKey = (pageIndex: number, previousPageData: userResponse) => {
    if (pageIndex === 0)
      return `${BASE_URL}/api/v1/web/users/management?sortBy=${sortBy}&isAscending=${isAscending}&page=1`;
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/users/management?sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite<userResponse>(getKey, swrWithToken, {
    initialSize: 1,
  });

  const userData: userResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as userResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && isValidating && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { userData, error, isLoadingMore, size, setSize, isEndReached, mutate };
};

export const useUserSearch = (keyword: string, sortBy: string = 'createdDate', isAscending: boolean = false) => {
  const getKey = (pageIndex: number, previousPageData: userResponse) => {
    if (pageIndex === 0)
      return `${BASE_URL}/api/v1/web/users/management/search?keyword=${keyword}&sortBy=${sortBy}&isAscending=${isAscending}&page=1`;
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/users/management/search?keyword=${keyword}&sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite<userResponse>(getKey, swrWithToken, {
    initialSize: 1,
  });

  const userData: userResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as userResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && isValidating && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { userData, error, isLoadingMore, size, setSize, isEndReached, mutate };
};
