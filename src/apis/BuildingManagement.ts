import {
  BuildingManagementResponse,
  BuildingManagementInfoResponse,
  BuildingManagementFloorResponse,
  BuildingManagementRoomResponse,
  BuildingManagementMemoResponse,
} from '@/types/buildingm';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE3Mjc0ODgyLCJleHAiOjE3MTcyNzY2ODJ9.e6m4rTunzY6w3bOPmUCAfh_YoU_oE49665QTj4LwQIpAJNg1qPrPbxHMZKZllqgITeBVz2xJt_K6UXGkSWbpYQ';

export const getBuildingNameList = async (): Promise<BuildingManagementResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: BuildingManagementResponse = await res.json();

  return data;
};

export const getBuildingInfoList = async (dormitoryId: number): Promise<BuildingManagementInfoResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  // if (!res.ok) {
  //   throw new Error(`Server responded with status ${res.status}`);
  // }

  const data: BuildingManagementInfoResponse = await res.json();

  return data;
};

export const getBuildingFloorList = async (dormitoryId: number): Promise<BuildingManagementFloorResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/floor`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: BuildingManagementFloorResponse = await res.json();

  return data;
};

export const getBuildingRoomList = async (
  dormitoryId: number,
  floor: number,
): Promise<BuildingManagementRoomResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/${floor}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: BuildingManagementRoomResponse = await res.json();

  return data;
};

export const putBuildingMemo = async (dormitoryId: number, memo: string): Promise<BuildingManagementMemoResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/memo`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
    body: JSON.stringify({
      memo: memo,
    }),
  });

  const data: BuildingManagementMemoResponse = await res.json();

  return data;
};
