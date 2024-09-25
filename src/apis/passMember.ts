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

// 기숙사별 합격자 목록 조회
export const useDormIdPassMembers = (dormitoryApplicationSettingId: number, dormitoryId: number) => {
  const { data, error, mutate } = useSWR<passMemberResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication/${dormitoryApplicationSettingId}/${dormitoryId}`,
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

// 전체 합격자 목록 검색 조회
export const useAllPassMembersWithSearch = (dormitoryApplicationSettingId: number, searchWord: string) => {
  const searchQuery = searchWord ? `?searchWord=${searchWord}` : '';
  const { data, error, mutate } = useSWR<passMemberResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication/search/${dormitoryApplicationSettingId}${searchQuery}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 기숙사별 합격자 목록 검색 조회
export const useDormIdPassMembersWithSearch = (
  dormitoryApplicationSettingId: number,
  dormitoryId: number,
  searchWord: string,
) => {
  const searchQuery = searchWord ? `?searchWord=${searchWord}` : '';
  const { data, error, mutate } = useSWR<passMemberResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication/search/${dormitoryApplicationSettingId}/${dormitoryId}${searchQuery}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
