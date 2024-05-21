import { PointMemberResponse } from '@/types/pointManagement';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNjI3Nzg2OCwiZXhwIjoxNzE2Mjc5NjY4fQ.iVVN4Lt-fUmCU5Lza0G3OWqU6ZL_1Cmrf0jKDCOxMIp8JxMTqt76ZP0MDCDZFVwAPTspGxn-qZkUDP-phpESfw';

// * 사생 목록 조회
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

// * 상/벌점 리스트 조회
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

// * 사생 상벌점 부여
export const postMemberPoint = async (residentId: number, pointType: string, points: { pointId: number }[]) => {
  const res = await fetch(`http://13.209.177.109:8080/api/v1/web/points/${residentId}?pointType=${pointType}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(points),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('[Error response in postMemberPoint]', errorData);
    throw new Error('Failed to assign points');
  }

  const response = await res.json();
  return response;
};
