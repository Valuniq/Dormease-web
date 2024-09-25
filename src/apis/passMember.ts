import { BASE_URL } from '@/constants/path';
import { passMemberResponse } from '@/types/passMember';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

// 전체 합격자 목록 조회
export const useAllPassMembers = () => {
  const { data, error, mutate } = useSWR<passMemberResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
