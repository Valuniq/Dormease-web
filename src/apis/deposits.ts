import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

//입금 확인 명단 조회 API
export const useDepositList = () => {
  const { data, error, mutate } = useSWR<DepositListResponse>(
    `${BASE_URL}/api/v1/web/depositDormitoryApplication`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
