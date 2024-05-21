import { WithdrawalMemberResponse } from '@/types/withdrawal';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE2Mjc0NTA2LCJleHAiOjE3MTYyNzYzMDZ9.JdtbfFKm-kaAthDxrON6E0NYfhaI9Pm-0bSmFbLvGrzWx1-i4qY5Vx5Mmc7pZdO2PM4wA5VnN3aZxvXR-vKWiA';

export const getWithdrawalLists = async (page: number): Promise<WithdrawalMemberResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/users/management/delete?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: WithdrawalMemberResponse = await res.json();

  return data;
};

export const getWithdrawalSearch = async (page: number, keyword: string): Promise<WithdrawalMemberResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/users/management/delete/search?page=${page}&keyword=${keyword}`,
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

  const data: WithdrawalMemberResponse = await res.json();

  return data;
};
