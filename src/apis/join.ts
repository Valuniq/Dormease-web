import { BASE_URL } from '@/constants/path';

import {
  joinHistoryResponse,
  isJoinPeriodResponse,
  joinDormitoriesResponse,
  joinDormitoriesResponseInformation,
  joinPostRequest,
  joinTopThreeListResponse,
  joinTopThreeListResponseInformation,
  nowJoinResponse,
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

// 입사 신청 설정 생성
export const postDormitoryApplicationSetting = async (applicationData: joinPostRequest) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitoryApplicationSetting`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicationData),
  });

  return res;
};

// 입사 신청 기간 조회
export const useIsJoinPeriod = () => {
  const { data, error, mutate } = useSWR<isJoinPeriodResponse>(
    `${BASE_URL}/api/v1/app/dormitoryApplicationSetting`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 이전 입사 신청 설정 내역 조회
export const useJoinHistory = () => {
  const { data, error, mutate } = useSWR<joinHistoryResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplicationSetting/history`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 현재 입사 신청 설정 내역 조회
export const useNowJoin = () => {
  const { data, error, mutate } = useSWR<nowJoinResponse>(
    `${BASE_URL}/api/v1/web/dormitoryApplicationSetting`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
