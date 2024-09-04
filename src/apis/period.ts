import { BASE_URL } from '@/constants/path';
import { PeriodResponse } from '@/types/period';
import swrWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

//신청 기간 등록
export const postPeriod = async (startDate: string, endDate: string, periodType: 'LEAVE' | 'REFUND' | 'ROOMMATE') => {
  const res = await swrWithTokens(`${BASE_URL}/api/v1/web/period`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
  const { data, error, mutate } = useSWR<PeriodResponse>(`${BASE_URL}/api/v1/web/period/${periodType}`, swrWithTokens);
  return { data, error, isLoading: !error && !data, mutate };
};
