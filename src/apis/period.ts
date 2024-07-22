import { BASE_URL } from '@/constants/path';
import { PeriodResponse } from '@/types/period';
import swrWithToken from '@/utils/swrWithToken';
import useSWR from 'swr';

//신청 기간 등록
export const postPeriod = async (startDate: string, endDate: string, periodType: 'LEAVE' | 'REFUND' | 'ROOMMATE') => {
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

//신청 기간 조회
export const usePeriod = (periodType: 'LEAVE' | 'REFUND' | 'ROOMMATE') => {
  const { data, error, mutate } = useSWR<PeriodResponse>(`${BASE_URL}/api/v1/web/period/${periodType}`, swrWithToken);
  return { data, error, isLoading: !error && !data, mutate };
};
