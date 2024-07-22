import { faqResponse, faqResponseDataList } from './../types/faq';
import { BASE_URL } from './../constants/path';

import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';
import swrWithTokens from '@/utils/swrWithTokens';
import useSWR from 'swr';

export const useInfiniteFaq = () => {
  const getKey = (pageIndex: number, previousPageData: faqResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/notifications/FAQ?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<faqResponse>(getKey, swrWithToken);

  const faqData: faqResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as faqResponseDataList[])
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

  return { faqData, error, isLoadingMore, size, setSize, isReachingEnd };
};

export const postFaq = async (data: FormData) => {
  const response = await swrWithTokens(`${BASE_URL}/api/v1/web/notifications`, {
    method: 'POST',
    body: data,
  });

  return response;
};

export const useFaqDetail = (id: number) => {
  const { data, error } = useSWR(id ? `${BASE_URL}/api/v1/web/notifications/notification/${id}` : null, swrWithTokens);
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export const deleteFaq = async (id: number) => {
  const response = await swrWithTokens(`${BASE_URL}/api/v1/web/notifications/notification/${id}`, {
    method: 'DELETE',
  });

  return response;
};
export const patchFaq = async (data: FormData) => {
  const response = await swrWithTokens(`${BASE_URL}/api/v1/web/notifications`, {
    method: 'PATCH',
    body: data,
  });

  return response;
};
