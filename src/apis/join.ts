import { BASE_URL } from '@/constants/path';
import {
  joinDormitoriesResponse,
  joinDormitoriesResponseInformation,
  joinTopThreeListResponse,
  joinTopThreeListResponseInformation,
} from '@/types/join';
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

// 이전 입사 신청 설정 목록 3개 조회
export const useGetJoinThreeLists = () => {
  const { data, error } = useSWR<joinTopThreeListResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplicationSetting/topThree`,
    fetchWithTokens,
  );
  console.log(data);
  return {
    data: data?.information as joinTopThreeListResponseInformation[] | undefined,
    error: error as any,
    isLoading: !error && !data, // 데이터와 에러 둘 다 없으면 로딩 중으로 처리
  };
};
