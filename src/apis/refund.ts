import { BASE_URL } from '@/constants/path';
import { RefundListResponse } from '@/types/refund';
import swrWithTokens from '@/utils/swrWithTokens';
import useSWR from 'swr';

//환불 신청 사생 목록 조회
export const useRefundList = (pageNum: number) => {
  const { data, error } = useSWR<RefundListResponse>(
    `${BASE_URL}/api/v1/web/refundRequestment?page=${pageNum}`,
    swrWithTokens,
  );
  return { data, error, isLoading: !error && !data };
};

//환불 요청 완료 처리 (삭제)
export const deleteRefundList = async (residentId: number) => {
  const res = await swrWithTokens(`${BASE_URL}/api/v1/web/refundRequestment/${residentId}`, {
    method: 'DELETE',
  });
  return res;
};
