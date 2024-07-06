import { BASE_URL } from '@/constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';
import {
  ResignationDetailResponse,
  ResignationListResponse,
  ResignationListResponseDataList,
} from '@/types/resignation';
import useSWR from 'swr';

export const useResignationList = () => {
  const getKey = (pageIndex: number, previousPageData: ResignationListResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/exitRequestment/residents?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<ResignationListResponse>(getKey, swrWithToken);

  const resignationData: ResignationListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as ResignationListResponseDataList[])
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

  return { resignationData, error, isLoadingMore, size, setSize, isReachingEnd, mutate };
};

export const useResignationDetail = (exitRequestmentId: number) => {
  const { data, error } = useSWR<ResignationDetailResponse>(
    `${BASE_URL}/api/v1/web/exitRequestment/${exitRequestmentId}`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};

export const patchResignation = async (
  securityDepositReturnStatus: 'PAYMENT' | 'UNALBE',
  exitRequestmentIdList: number[],
) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/exitRequestment/securityDeposit`, {
    method: 'PATCH',
    body: JSON.stringify({
      securityDepositReturnStatus: securityDepositReturnStatus,
      exitRequestmentIdList: exitRequestmentIdList,
    }),
  });
  return res;
};
