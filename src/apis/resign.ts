import { BASE_URL } from '@/constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWRInfinite from 'swr/infinite';
import { ResignDetailResponse, ResignListResponse, ResignListResponseDataList } from '@/types/resign';
import useSWR from 'swr';

//퇴사 신청 사생 목록 조회
export const useResignList = () => {
  const getKey = (pageIndex: number, previousPageData: ResignListResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/exitRequestment/residents?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<ResignListResponse>(getKey, swrWithToken);

  const resignationData: ResignListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as ResignListResponseDataList[])
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

//퇴사 신청 상세 조회
export const useResignDetail = (exitRequestmentId: number) => {
  const { data, error } = useSWR<ResignDetailResponse>(
    `${BASE_URL}/api/v1/web/exitRequestment/${exitRequestmentId}`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};

//보증금 환급 상태 변경
export const patchResign = async (
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
