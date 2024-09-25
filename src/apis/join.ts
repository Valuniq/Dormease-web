import { BASE_URL } from '@/constants/path';
import { joinDormitoriesResponse, joinDormitoriesResponseInformation } from '@/types/join';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

export const useGetJoinDormitories = () => {
  const { data, error } = useSWR<joinDormitoriesResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplicationSetting/dormitories`,
    fetchWithTokens,
  );

  return {
    data: data?.information as joinDormitoriesResponseInformation[] | undefined,
    error: error as any,
    isLoading: !error && !data, // 데이터와 에러 둘 다 없으면 로딩 중으로 처리
  };
};
