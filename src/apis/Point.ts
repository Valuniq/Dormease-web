import { BASE_URL } from '@/constants/path';
import {
  PointListResponse,
  PointMemberResponse,
  PointMemberResponseDataList,
  ResidentPointResponse,
} from '@/types/point';
import useSWR from 'swr';
import swrWithTokens from '@/utils/fetchWithTokens';
import useSWRInfinite from 'swr/infinite';
import { PageInfo } from '@/types/pageInfo';

/**
 * 무한 스크롤을 위한 사생 목록 조회 훅
 * @returns pointManagementData - 사생 목록 데이터 배열
 * @returns error - 에러 객체
 * @returns isLoadingMore - 추가 데이터를 로드 중인지 여부
 * @returns size - 현재 페이지 번호
 * @returns setSize - 페이지 번호를 증가시키는 함수
 * @returns isReachingEnd - 마지막 페이지인지 여부
 */
export const useInfinitePointMemberList = () => {
  const getKey = (pageIndex: number, previousPageData: PointMemberResponse) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null; // 끝에 도달
    return `${BASE_URL}/api/v1/web/points?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite<PointMemberResponse>(getKey, swrWithTokens);

  const pointManagementData: PointMemberResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as PointMemberResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { pointManagementData, error, isLoadingMore, size, setSize, isReachingEnd };
};
// * 상/벌점 리스트 조회
export const usePointsDetail = () => {
  const { data, error } = useSWR<PointListResponse>(`${BASE_URL}/api/v1/web/points/detail`, swrWithTokens);
  return { data, error, isLoading: !error && !data };
};

// * 상/벌점 리스트 삭제
export const deletePointsDetail = async (pointId: number) => {
  const res = await swrWithTokens(`${BASE_URL}/api/v1/web/points/detail/${pointId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

// * 사생 상벌점 부여
export const postMemberPoint = async (residentId: number, pointType: string, points: { pointId: number }[]) => {
  const res = await swrWithTokens(`${BASE_URL}/api/v1/web/points/${residentId}?pointType=${pointType}`, {
    method: 'POST',
    body: JSON.stringify(points),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

// * 사생 상/벌점 내역 상세 조회
export const usePointsByResidentId = (residentId: number, page: PageInfo) => {
  const { data, error } = useSWR<ResidentPointResponse>(
    `${BASE_URL}/api/v1/web/points/${residentId}?page=${page.currentPage}`,
    swrWithTokens,
  );
  return { data, error, isLoading: !error && !data };
};

// * 상벌점 내역 등록
export const postPointsDetail = async (
  bonusPointList: { pointId: number; content: string; score: number }[],
  minusPointList: { pointId: number; content: string; score: number }[],
) => {
  const res = await swrWithTokens(`${BASE_URL}/api/v1/web/points/detail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bonusPointList, minusPointList }),
  });
  return res;
};
