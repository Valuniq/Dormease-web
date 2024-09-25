import { BASE_URL } from '@/constants/path';
import { passMemberDormitoryResponse, passMemberResponse } from '@/types/passMember';
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

// 기숙사 별 합격자 목록 조회
export const useDormIdPassMembers = (dormitoryId: number) => {
  const { data, error, mutate } = useSWR<passMemberResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication/${dormitoryId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 기숙사 목록 조회
export const usePassDormitories = (dormitoryApplicationSettingId: number) => {
  const { data, error, mutate } = useSWR<passMemberDormitoryResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication/dormitories/${dormitoryApplicationSettingId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
