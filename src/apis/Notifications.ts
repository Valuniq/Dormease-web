import { BASE_URL } from './../constants/path';
import { noticeResponse, noticeResponseDataList } from './../types/notice';
import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';

export const useInfiniteNotifications = () => {
  const getKey = (pageIndex: number, previousPageData: noticeResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/notifications/ANNOUNCEMENT?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<noticeResponse>(getKey, swrWithToken);

  const notificationsData: noticeResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as noticeResponseDataList[])
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

  return { notificationsData, error, isLoadingMore, size, setSize, isReachingEnd };
};
