import { BASE_URL } from '@/constants/path';
import { RefundRequestmentResponse } from '@/types/refund';
import swrWithToken from '@/utils/swrWithToken';
import useSWR from 'swr';

export const useRefundRequestment = (pageNum: number) => {
  const { data, error } = useSWR<RefundRequestmentResponse>(
    `${BASE_URL}/api/v1/web/refundRequestment?page=${pageNum}`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};

export const postPeriod = async (startDate: string, endDate: string, periodType: 'REFUND') => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/period`, {
    method: 'POST',
    body: JSON.stringify({
      startDate: startDate,
      endDate: endDate,
      periodType: periodType,
    }),
  });
  return res;
};

export const deleteRefundRequestment = async (residentId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/refundRequestment/${residentId}`, {
    method: 'DELETE',
  });
  return res;
};
