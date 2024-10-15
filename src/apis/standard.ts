import { StandardSettingRegionResList, StandardSettingRegionsResponse, StandardSettingRequest } from '@/types/standard';
import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';
import { StandardSettingResponseInformation, standardSettingResponse } from './../types/standard';

//기준 조회
export const useStandard = () => {
  const { data, error, mutate } = useSWR<standardSettingResponse>(
    `${BASE_URL}/api/v1/web/standardSetting`,
    fetchWithTokens,
    {
      onErrorRetry: (error) => {
        // 특정 에러 메시지가 있는 경우 재시도하지 않음
        if (error.response?.data?.reason === '기준 설정을 찾을 수 없습니다.') {
          return; // 재시도하지 않음
        }
      },
    },
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 광역시도 지역 목록 조회
export const useRegions = () => {
  const { data, error, mutate } = useSWR<StandardSettingRegionsResponse>(
    `${BASE_URL}/api/v1/web/regions`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

// 광역시도 지역 목록 조회
export const useRegionsDetail = (regionId: number) => {
  const { data, error, mutate } = useSWR<StandardSettingRegionsResponse>(
    `${BASE_URL}/api/v1/web/regions/${regionId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//기준 등록
export const postStandard = async (StandardSettingInformation: StandardSettingRequest) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/standardSetting`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      minScore: StandardSettingInformation.minScore,
      scoreRatio: StandardSettingInformation.scoreRatio,
      distanceRatio: StandardSettingInformation.distanceRatio,
      pointReflection: StandardSettingInformation.pointReflection,
      tiePriority: StandardSettingInformation.tiePriority,
      freshmanStandard: StandardSettingInformation.freshmanStandard,
      prioritySelection: StandardSettingInformation.prioritySelection,
      movePassSelection: StandardSettingInformation.movePassSelection,
      sameSmoke: StandardSettingInformation.sameSmoke,
      sameTerm: StandardSettingInformation.sameTerm,
      entrancePledge: StandardSettingInformation.entrancePledge,
      distanceScoreReqList: StandardSettingInformation.distanceScoreReqList,
    }),
  });
  return res;
};

export const patchStandard = async (StandardSettingInformation: StandardSettingRequest, standardSettingId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/standardSetting/${standardSettingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      minScore: StandardSettingInformation.minScore,
      scoreRatio: StandardSettingInformation.scoreRatio,
      distanceRatio: StandardSettingInformation.distanceRatio,
      pointReflection: StandardSettingInformation.pointReflection,
      tiePriority: StandardSettingInformation.tiePriority,
      freshmanStandard: StandardSettingInformation.freshmanStandard,
      prioritySelection: StandardSettingInformation.prioritySelection,
      movePassSelection: StandardSettingInformation.movePassSelection,
      sameSmoke: StandardSettingInformation.sameSmoke,
      sameTerm: StandardSettingInformation.sameTerm,
      entrancePledge: StandardSettingInformation.entrancePledge,
      distanceScoreReqList: StandardSettingInformation.distanceScoreReqList,
    }),
  });
  return res;
};
