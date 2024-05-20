import { PointMemberResponse } from '@/types/pointManagement';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNjE4NzQ2NywiZXhwIjoxNzE2MTg5MjY3fQ.IWifmwyu44GRmhLoYoHLivdOzcgMtMd_X6zmh3PFSYyByDPavv8Lnl6pond84IdE9F3rFDjMPTo0jUiHA3S-dA';

export const getPointMemberList = async (page: number): Promise<PointMemberResponse> => {
  const res = await fetch(`http://13.209.177.109:8080/api/v1/web/points?pages=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    console.log(res);
    throw new Error('Failed');
  }
  const response = await res.json();
  return response as PointMemberResponse;
};

export const getPointsDetail = async () => {
  const res = await fetch('http://13.209.177.109:8080/api/v1/web/points/detail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    console.log(res);
    throw new Error('Failed');
  }
  const response = await res.json();
  return response.information;
};
