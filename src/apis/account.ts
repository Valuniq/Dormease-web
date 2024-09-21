import { BASE_URL } from '@/constants/path';
import { AdminAccountResponse } from '@/types/account';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

//관리자 소속 학교, 아이디, 이름 조회
export const useAdminAccount = () => {
  const { data, error, mutate } = useSWR<AdminAccountResponse>(`${BASE_URL}/api/v1/web/admin/account`, fetchWithTokens);
  return { data, error, isLoading: !error && !data, mutate };
};
