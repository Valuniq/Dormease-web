// import {
//   BuildingManagementResponse,
//   BuildingManagementInfoResponse,
//   BuildingManagementFloorResponse,
//   BuildingManagementRoomResponse,
//   BuildingManagementMemoResponse,
//   BuildingRoomInAssignedResponse,
// } from '@/types/buildingm';

// const accessToken =
//   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE5NzYzNjg2LCJleHAiOjE3MTk3NjU0ODZ9.dIzXicB5rNhhgPe5ewJ4eVzfD6OCZrxfrEsDaIlontSM-Jwf6ssrM3wYa7KxEKUOA7YGigiEvuIkdUnHTigylA';

// export const getBuildingNameList = async (): Promise<BuildingManagementResponse> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `bearer ${accessToken}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error(`Server responded with status ${res.status}`);
//   }

//   const data: BuildingManagementResponse = await res.json();

//   return data;
// };

// export const getBuildingInfoList = async (dormitoryId: number): Promise<BuildingManagementInfoResponse> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `bearer ${accessToken}`,
//     },
//   });

//   const data: BuildingManagementInfoResponse = await res.json();

//   return data;
// };

// export const getBuildingFloorList = async (dormitoryId: number): Promise<BuildingManagementFloorResponse> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/floor`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `bearer ${accessToken}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error(`Server responded with status ${res.status}`);
//   }

//   const data: BuildingManagementFloorResponse = await res.json();

//   return data;
// };

// export const getBuildingRoomList = async (
//   dormitoryId: number,
//   floor: number,
// ): Promise<BuildingManagementRoomResponse> => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/${floor}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${accessToken}`,
//       },
//     },
//   );

//   if (!res.ok) {
//     throw new Error(`Server responded with status ${res.status}`);
//   }

//   const data: BuildingManagementRoomResponse = await res.json();

//   return data;
// };

// export const putBuildingMemo = async (dormitoryId: number, memo: string): Promise<BuildingManagementMemoResponse> => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/memo`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       memo: memo,
//     }),
//   });

//   const data: BuildingManagementMemoResponse = await res.json();

//   return data;
// };

// export const getRoomAssignedList = async (roomId: number): Promise<BuildingRoomInAssignedResponse> => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/assigned`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${accessToken}`,
//       },
//     },
//   );

//   const data: BuildingRoomInAssignedResponse = await res.json();

//   return data;
// };

// export const getRoomNotAssignedList = async (dormitoryId: number): Promise<BuildingRoomInAssignedResponse> => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/rooms/${dormitoryId}/not-assigned`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${accessToken}`,
//       },
//     },
//   );

//   const data: BuildingRoomInAssignedResponse = await res.json();

//   return data;
// };

import {
  BuildingManagementResponse,
  BuildingManagementInfoResponse,
  BuildingManagementFloorResponse,
  BuildingManagementRoomResponse,
  BuildingManagementMemoResponse,
  BuildingRoomInAssignedResponse,
} from '@/types/buildingm';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE5NzYzNjg2LCJleHAiOjE3MTk3NjU0ODZ9.dIzXicB5rNhhgPe5ewJ4eVzfD6OCZrxfrEsDaIlontSM-Jwf6ssrM3wYa7KxEKUOA7YGigiEvuIkdUnHTigylA';

const handleUnauthorized = async () => {
  // 여기에 401 처리 로직을 추가
  console.error('Unauthorized access - 401');
};

const handleResponse = async (res: Response) => {
  if (res.status === 401) {
    await handleUnauthorized();
    throw new Error('Unauthorized');
  }
  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }
  return res.json();
};

export const getBuildingNameList = async (): Promise<BuildingManagementResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  return handleResponse(res);
};

export const getBuildingInfoList = async (dormitoryId: number): Promise<BuildingManagementInfoResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  return handleResponse(res);
};

export const getBuildingFloorList = async (dormitoryId: number): Promise<BuildingManagementFloorResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/${dormitoryId}/floor`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  return handleResponse(res);
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

  return handleResponse(res);
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

  return handleResponse(res);
};

export const getRoomAssignedList = async (roomId: number): Promise<BuildingRoomInAssignedResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/rooms/${roomId}/assigned`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${accessToken}`,
      },
    },
  );

  return handleResponse(res);
};

export const getRoomNotAssignedList = async (dormitoryId: number): Promise<BuildingRoomInAssignedResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/management/rooms/${dormitoryId}/not-assigned`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${accessToken}`,
      },
    },
  );

  return handleResponse(res);
};
