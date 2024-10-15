import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';
import { applicantResponse } from './../types/applicant';

//현재 입사 신청 설정에 대한 입사 신청 목록 조회
export const useNowApplicant = () => {
  const { data, error, mutate } = useSWR<applicantResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplication`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
