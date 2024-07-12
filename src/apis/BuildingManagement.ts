import { BuildingManagementResponse, BuildingRoomManualRequest } from '@/types/buildingm';
import { BASE_URL } from '@/constants/path';
import swrWithToken from '@/utils/swrWithToken';
import useSWR from 'swr';

//건물명(인실) 목록 조회
export const useBuildingNameList = () => {
  const { data, error } = useSWR<BuildingManagementResponse>(
    `${BASE_URL}/api/v1/web/dormitory/management`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};

//건물 정보 조회
export const getBuildingInfoList = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}`, {
    method: 'GET',
  });
  return res;
};

//호실 목록 조회
export const getBuildingRoomList = async (dormitoryId: number, floor: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/${floor}`, {
    method: 'GET',
  });
  return res;
};

//층 수 목록 조회
export const getBuildingFloorList = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/floor`, {
    method: 'GET',
  });
  return res;
};

//특정 호실에 배정된 사생 조회
export const getRoomAssignedList = async (roomId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/assigned`, {
    method: 'GET',
  });
  return res;
};

//미배정 사생 조회
export const getRoomNotAssignedList = async (dormitoryId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${dormitoryId}/not-assigned`, {
    method: 'GET',
  });
  return res;
};

//메모 저장
export const putBuildingMemo = async (dormitoryId: number, memo: string) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/memo`, {
    method: 'PUT',
    body: JSON.stringify({
      memo: memo,
    }),
  });
  return res;
};

//수기 방배정
export const putRoomManual = async (manual: BuildingRoomManualRequest[]) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/dormitory/management/rooms/manual`, {
    method: 'PUT',
    body: JSON.stringify(manual),
  });
  return res;
};
