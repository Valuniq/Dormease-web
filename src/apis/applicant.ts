import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';
import {
  applicantResponse,
  applicationDetailResponse,
  applicationSearchResponse,
  historyResponse,
} from './../types/applicant';

//현재 입사 신청 설정에 대한 입사 신청 목록 조회
export const useNowApplicant = () => {
  const { data, error, mutate } = useSWR<applicantResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplication`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 이전 입사 신청 목록 조회
export const useHistoryList = () => {
  const { data, error, mutate } = useSWR<historyResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplicationSetting/history`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 검색어가 없을 때 API 호출을 하지 않도록 처리된 hook
export const useApplicantSearchById = (dormitoryApplicationSettingId: number, searchWord: string | null) => {
  // 검색어가 null일 경우 API 호출을 막음
  const url = searchWord
    ? `${BASE_URL}/api/v1/web/dormitoryApplication/search/${dormitoryApplicationSettingId}?searchWord=${searchWord}`
    : null;
  const { data, error, mutate } = useSWR<applicationSearchResponse>(url, fetchWithTokens);
  return { data, error, isLoading: !error && !data, mutate };
};

// ID로 입사 신청 목록 상세 조회
export const useApplicantById = (dormitoryApplicationSettingId: number) => {
  const { data, error, mutate } = useSWR<applicationDetailResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplication/${dormitoryApplicationSettingId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
