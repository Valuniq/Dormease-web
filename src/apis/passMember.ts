import { BASE_URL } from '@/constants/path';
import { passMemberDormitoryResponse, passMemberResponse, passMemberSearchResponse } from '@/types/passMember';
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

// 전체 합격자 목록 검색 조회
export const useAllPassMembersWithSearch = (searchWord: string | undefined | null) => {
  const searchQuery = searchWord ? `?searchWord=${searchWord}` : '';
  const { data, error, mutate } = useSWR<passMemberSearchResponse>(
    searchWord ? `${BASE_URL}/api/v1/web/passDormitoryApplication/search${searchQuery}` : null,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 기숙사 목록 조회
export const usePassDormitories = () => {
  const { data, error, mutate } = useSWR<passMemberDormitoryResponse>(
    `${BASE_URL}/api/v1/web/passDormitoryApplication/dormitories`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 기숙사별 합격자 목록 조회
export const useDormIdPassMembers = (dormitoryId?: number) => {
  const { data, error, mutate } = useSWR<passMemberResponse>(
    dormitoryId ? `${BASE_URL}/api/v1/web/passDormitoryApplication/${dormitoryId}` : null,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 기숙사별 합격자 목록 검색 조회
export const useDormIdPassMembersWithSearch = (
  dormitoryId: number | undefined | null,
  searchWord: string | undefined | null,
) => {
  const searchQuery = searchWord ? `?searchWord=${searchWord}` : '';
  const { data, error, mutate } = useSWR<passMemberSearchResponse>(
    dormitoryId && searchWord
      ? `${BASE_URL}/api/v1/web/passDormitoryApplication/search/${dormitoryId}${searchQuery}`
      : null,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
