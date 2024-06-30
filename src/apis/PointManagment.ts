// src/apis/pointManagement.ts
import { BASE_URL } from '@/constants/path';
import { PageDetailInfo, PointListResponse, PointMemberResponse, ResidentPointResponse } from '@/types/pointManagement';
import useSWR from 'swr';
import swrWithToken from '@/utils/swrWithToken';

// * 사생 목록 조회
export const usePointMemberList = (page: number) => {
  const { data, error } = useSWR<PointMemberResponse>(`${BASE_URL}/api/v1/web/points?page=${page}`, swrWithToken);
  return { data, error, isLoading: !error && !data };
};

// * 상/벌점 리스트 조회
export const usePointsDetail = () => {
  const { data, error } = useSWR<PointListResponse>(`${BASE_URL}/api/v1/web/points/detail`, swrWithToken);
  return { data, error, isLoading: !error && !data };
};

// * 상/벌점 리스트 삭제
export const deletePointsDetail = async (pointId: number) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/points/detail/${pointId}`, {
    method: 'DELETE',
  });
  return res;
};

// * 사생 상벌점 부여
export const postMemberPoint = async (residentId: number, pointType: string, points: { pointId: number }[]) => {
  const res = await swrWithToken(`${BASE_URL}/api/v1/web/points/${residentId}?pointType=${pointType}`, {
    method: 'POST',
    body: JSON.stringify(points),
  });
  return res;
};

// * 사생 상/벌점 내역 상세 조회
export const usePointsByResidentId = (residentId: number, page: PageDetailInfo) => {
  const { data, error } = useSWR<ResidentPointResponse>(
    `${BASE_URL}/api/v1/web/points/${residentId}?page=${page.currentPage}`,
    swrWithToken,
  );
  return { data, error, isLoading: !error && !data };
};
