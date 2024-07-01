import { BuildingManagementResponse } from '@/types/buildingm';
import { BASE_URL } from '@/constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWR from 'swr';

export const useBuildingNameList = () => {
  const { data, error } = useSWR<BuildingManagementResponse>(
    `${BASE_URL}/api/v1/web/dormitory/management`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};

export const getBuildingInfoList = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}`, {
    method: 'GET',
  });
  return res;
};

export const getBuildingFloorList = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/floor`, {
    method: 'GET',
  });
  return res;
};

export const getBuildingRoomList = async (dormitoryId: number, floor: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/${floor}`, {
    method: 'GET',
  });
  return res;
};

export const putBuildingMemo = async (dormitoryId: number, memo: string) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/memo`, {
    method: 'PUT',
    body: JSON.stringify({
      memo: memo,
    }),
  });
  return res;
};

export const getRoomAssignedList = async (roomId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/assigned`, {
    method: 'GET',
  });
  return res;
};

export const getRoomNotAssignedList = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${dormitoryId}/not-assigned`, {
    method: 'GET',
  });
  return res;
};
