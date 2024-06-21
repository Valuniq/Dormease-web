import { BASE_URL } from '@/constants/path';
import { PageDetailInfo, PointListResponse, PointMemberResponse, ResidentPointResponse } from '@/types/pointManagement';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNjMxMTcyOSwiZXhwIjoxNzE2MzEzNTI5fQ.Ruh_nxITds3x2GmHZZNSDMlOgRXjTI_nvFp5sEaO5kn4V5Xetsemd_HZ_CLFkuN8f9JLfohFm-D0vnSsn3FUUw';

// * 사생 목록 조회
export const getPointMemberList = async (page: number): Promise<PointMemberResponse> => {
  const res = await fetch(`${BASE_URL}/api/v1/web/points?pages=${page}`, {
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
export const getPointsDetail = async (): Promise<PointListResponse> => {
  const res = await fetch('${BASE_URL}/api/v1/web/points/detail', {
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
  return response as PointListResponse;
};

// * 상/벌점 리스트 삭제
export const deletePointsDetail = async (pointId: number) => {
  const res = await fetch(`${BASE_URL}/api/v1/web/points/detail/${pointId}`, {
    method: 'DELETE',
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
  return response;
};

// * 사생 상벌점 부여
export const postMemberPoint = async (residentId: number, pointType: string, points: { pointId: number }[]) => {
  const res = await fetch(`${BASE_URL}/api/v1/web/points/${residentId}?pointType=${pointType}`, {
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

// * 사생 상/벌점 내역 상세 조회
export const getPointsByResidentId = async ({
  residentId,
  page,
}: {
  residentId: number;
  page: PageDetailInfo;
}): Promise<ResidentPointResponse> => {
  const res = await fetch(`${BASE_URL}/api/v1/web/points/${residentId}?page=${page.currentPage}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('[Error response in getPointsByResidentId]', errorData);
    throw new Error('Failed to assign points');
  }

  const response = await res.json();
  return response as ResidentPointResponse;
};
