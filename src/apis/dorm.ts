import { DormNameResponse, DormRoomManualRequest } from '@/types/dorm';
import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';

//건물명(인실) 목록 조회
export const useDormNameList = () => {
  const { data, error } = useSWR<DormNameResponse>(`${BASE_URL}/api/v1/web/dormitory/management`, fetchWithTokens);
  return { data, error, isLoading: !error && !data };
};

//건물 정보 조회
export const getDormInfoList = async (dormitoryId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//호실 목록 조회
export const getDormRoomList = async (dormitoryId: number, floor: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/${floor}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//층 수 목록 조회
export const getDormFloorList = async (dormitoryId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/floor`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//특정 호실에 배정된 사생 조회
export const getRoomAssignedList = async (roomId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/assigned`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//미배정 사생 조회
export const getRoomNotAssignedList = async (roomId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/not-assigned`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//메모 저장
export const putDormMemo = async (dormitoryId: number, memo: string) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/memo`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      memo: memo,
    }),
  });
  return res;
};

//수기 방배정
export const putRoomManual = async (roomId: number, manual: DormRoomManualRequest) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/manual`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(manual),
  });
  return res;
};
