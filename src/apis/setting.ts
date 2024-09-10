import {
  DormAddDeleteResponse,
  DormSettingDetailResponse,
  DormSettingDetailResponseInformationFloor,
  DormSettingDetailRoomResponse,
  DormSettingResponse,
} from '@/types/setting';
import { BASE_URL } from '@/constants/path';
import useSWR from 'swr';
import fetchWithTokens from '@/utils/fetchWithTokens';

//건물 사진 변경
export const postDormSettingImage = async (dormitoryId: number, image: File) => {
  const formData = new FormData();
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/image`, {
    method: 'POST',
    body: formData,
  });
  return res;
};

//건물 목록 조회
export const useDormList = () => {
  const { data, error, mutate } = useSWR<DormSettingResponse>(
    `${BASE_URL}/api/v1/web/dormitory/setting`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//건물 추가
export const postAddDorm = async (name: string, image: File | null): Promise<DormAddDeleteResponse> => {
  const formData = new FormData();
  formData.append('registerDormitoryReq', new Blob([JSON.stringify({ name: name })], { type: 'application/json' }));
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting`, {
    method: 'POST',
    body: formData,
  });
  return res;
};

//건물 삭제
export const deleteDorm = async (dormitoryId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//건물 상세 조회
export const useDormDetail = (dormitoryId: number) => {
  const { data, error, mutate } = useSWR<DormSettingDetailResponse>(
    `${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//호실 조회
export const useDormDetailRoom = (dormitoryId: number, floor: number) => {
  const { data, error, mutate } = useSWR<DormSettingDetailRoomResponse>(
    `${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/${floor}/room`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};

//호실 생성
export const postRoom = async (
  dormitoryId: number,
  floorAndRoomNumberRes: DormSettingDetailResponseInformationFloor,
) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/room`, {
    method: 'POST',
    body: JSON.stringify(floorAndRoomNumberRes),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//호실 삭제
export const deleteRoom = async (dormitoryId: number, floor: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/${floor}/room`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//건물명 수정
export const putDormitoryName = async (dormitoryId: number, name: string) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/name`, {
    method: 'PUT',
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
