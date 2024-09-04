import { BASE_URL } from '@/constants/path';
import { blacklistResponse, blacklistResponseDataList } from '@/types/blacklist';
import swrWithTokens from '@/utils/swrWithTokens';
import useSWRInfinite from 'swr/dist/infinite';

export const useInfiniteBlacklist = () => {
  const getKey = (pageIndex: number, previousPageData: blacklistResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/notifications/ANNOUNCEMENT?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<blacklistResponse>(getKey, swrWithTokens);

  const blacklistsData: blacklistResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as blacklistResponseDataList[])
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

  return { blacklistsData, error, isLoadingMore, size, setSize, isReachingEnd, mutate };
};
