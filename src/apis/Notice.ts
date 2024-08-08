import { BASE_URL } from '../constants/path';
import { noticeResponse, noticeResponseDataList } from '../types/notice';

import useSWRInfinite from 'swr/infinite';
import swrWithTokens from '@/utils/swrWithTokens';
import test from '@/utils/swrWithToken';
import useSWR from 'swr';

export const useInfiniteNotifications = () => {
  const getKey = (pageIndex: number, previousPageData: noticeResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/notifications/ANNOUNCEMENT?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<noticeResponse>(getKey, test);

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

  return { notificationsData, error, isLoadingMore, size, setSize, isReachingEnd, mutate };
};

export const postNotification = async (data: FormData) => {
  const response = await swrWithTokens(`${BASE_URL}/api/v1/web/notifications`, {
    method: 'POST',
    body: data,
  });

  return response;
};

export const useNoticeDetail = (id: number) => {
  const { data, error } = useSWR(id ? `${BASE_URL}/api/v1/web/notifications/notification/${id}` : null, swrWithTokens);
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export const deleteNotice = async (id: number) => {
  const response = await swrWithTokens(`${BASE_URL}/api/v1/web/notifications/notification/${id}`, {
    method: 'DELETE',
  });

  return response;
};

export const patchNotification = async (data: FormData) => {
  const response = await swrWithTokens(`${BASE_URL}/api/v1/web/notifications`, {
    method: 'PATCH',
    body: data,
  });

  return response;
};
