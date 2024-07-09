import { BASE_URL } from '@/constants/path';
import { RequestDetailResponse, RequestResponse, RequestResponseDataList } from '@/types/request';
import swrWithToken from '@/utils/swrWithToken';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

export const useRequestList = () => {
  const getKey = (pageIndex: number, previousPageData: RequestResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/app/requestments?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<RequestResponse>(getKey, swrWithToken);

  const requestData: RequestResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as RequestResponseDataList[])
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

  return { requestData, error, isLoadingMore, size, setSize, isReachingEnd };
};

export const useRequestDetail = (requestmentId: number) => {
  const { data, error } = useSWR<RequestDetailResponse>(
    `${BASE_URL}/api/v1/app/requestments/${requestmentId}`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};
