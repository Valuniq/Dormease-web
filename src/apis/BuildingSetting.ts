import {
  BuildingAddDeleteResponse,
  BuildingSettingDetailResponse,
  BuildingSettingDetailRoomResponse,
  BuildingSettingsResponse,
} from '@/types/building';
import { BASE_URL } from '@/constants/path';
import SwrWithTokens from '@/utils/swrWithTokens';
import swrWithToken from '@/utils/swrWithToken';
import useSWR from 'swr';

//건물 사진 변경
export const postBuildingSettingImage = async (dormitoryId: number, image: File) => {
  const formData = new FormData();
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await SwrWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/image`, {
    method: 'POST',
    body: formData,
  });
  return res;
};

//건물 목록 조회
export const useBuildingList = () => {
  const { data, error, mutate } = useSWR<BuildingSettingsResponse>(
    `${BASE_URL}/api/v1/web/dormitory/setting`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//건물 추가
export const postAddBuilding = async (name: string, image: File | null): Promise<BuildingAddDeleteResponse> => {
  const formData = new FormData();
  formData.append('registerDormitoryReq', new Blob([JSON.stringify({ name: name })], { type: 'application/json' }));
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await SwrWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting`, {
    method: 'POST',
    body: formData,
  });
  return res;
};

//건물 삭제
export const deleteBuilding = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}`, {
    method: 'DELETE',
  });
  return res;
};

//건물 상세 조회
export const useBuildingDetail = (dormitoryId: number) => {
  const { data, error, mutate } = useSWR<BuildingSettingDetailResponse>(
    `${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//호실 조회
export const useBuildingDetailRoom = (dormitoryId: number, floor: number) => {
  const { data, error, mutate } = useSWR<BuildingSettingDetailRoomResponse>(
    `${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/${floor}/room`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//호실 삭제
export const deleteRoom = async (dormitoryId: number, floor: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/${floor}/room`, {
    method: 'DELETE',
  });
  return res;
};
