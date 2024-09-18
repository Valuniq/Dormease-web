import { BASE_URL } from '@/constants/path';
import { RequestDetailResponse, RequestListResponse, RequestListResponseDataList } from '@/types/request';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

//요청사항 목록 조회
export const useRequestList = () => {
  const getKey = (pageIndex: number, previousPageData: RequestListResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/requestments?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<RequestListResponse>(getKey, fetchWithTokens);

  const requestData: RequestListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as RequestListResponseDataList[])
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

//요청사항 상세 조회
export const useRequestDetail = (requestmentId: number) => {
  const { data, error } = useSWR<RequestDetailResponse>(
    `${BASE_URL}/api/v1/web/requestments/${requestmentId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data };
};

//요청사항 검토 상태 변경
export const putRequest = async (requestmentId: number, progression: string) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/requestments/${requestmentId}`, {
    method: 'PUT',
    body: JSON.stringify({
      progression,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};

//요청사항 삭제
export const deleteRequest = async (requestmentId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/requestments/${requestmentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};
