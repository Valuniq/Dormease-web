import { BASE_URL } from '@/constants/path';
import {
  PointListResponse,
  PointMemberResponse,
  PointMemberResponseDataList,
  ResidentPointResponse,
  ResidentPointResponseUserPointDetailRes,
} from '@/types/point';
import useSWR from 'swr';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWRInfinite from 'swr/infinite';
import { PageInfo } from '@/types/pageInfo';

// 사생 목록 조회 및 정렬
export const useInfinitePointMember = (sortBy: string = 'name', isAscending: boolean = true) => {
  const getKey = (pageIndex: number, previousPageData: PointMemberResponse) => {
    if (pageIndex === 0) return `${BASE_URL}/api/v1/web/points?sortBy=${sortBy}&isAscending=${isAscending}&page=1`;
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/points?sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite<PointMemberResponse>(
    getKey,
    fetchWithTokens,
    {
      initialSize: 1,
    },
  );

  const userData: PointMemberResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as PointMemberResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && isValidating && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { userData, error, isLoadingMore, size, setSize, isEndReached, isLoadingInitialData, mutate };
};

// 사생 검색 및 정렬
export const useInfinitePointMemberSearch = (keyword: string, sortBy: string = 'name', isAscending: boolean = true) => {
  const getKey = (pageIndex: number, previousPageData: PointMemberResponse) => {
    if (pageIndex === 0)
      return `${BASE_URL}/api/v1/web/points/search?keyword=${keyword}&sortBy=${sortBy}&isAscending=${isAscending}&page=1`;
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/points/search?keyword=${keyword}&sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite<PointMemberResponse>(
    getKey,
    fetchWithTokens,
    {
      initialSize: 1,
    },
  );

  const userData: PointMemberResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as PointMemberResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && isValidating && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { userData, error, isLoadingMore, size, setSize, isEndReached, isLoadingInitialData, mutate };
};

// * 사생 상벌점 부여
export const postMemberPoint = async (residentId: number, points: { pointId: number }[]) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/points/${residentId}`, {
    method: 'POST',
    body: JSON.stringify(points),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

// 무한 스크롤을 위한 사생 상/벌점 내역 상세 조회
export const useInfinitePointsByResidentId = (residentId: number) => {
  const getKey = (pageIndex: number, previousPageData: ResidentPointResponse | null) => {
    if (previousPageData && previousPageData.information.userPointDetailRes.length === 0) return null; // 더 이상 데이터가 없을 때 멈춤
    return `${BASE_URL}/api/v1/web/points/${residentId}?page=${pageIndex + 1}`; // 다음 페이지의 URL 생성
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite<ResidentPointResponse>(getKey, fetchWithTokens, {
    initialSize: 1,
  });

  const allPenaltyLists: ResidentPointResponseUserPointDetailRes[] = data
    ? data.reduce(
        (acc, cur) => acc.concat(cur.information.userPointDetailRes),
        [] as ResidentPointResponseUserPointDetailRes[],
      )
    : [];

  const isLoadingInitialData = !data && !error;

  // 현재 데이터를 로딩 중인지 확인
  const isLoading = isValidating && size > 0;

  const isEmpty = data?.[0]?.information.userPointDetailRes.length === 0;

  // 마지막 페이지에 도달했는지 확인
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  console.log({
    isLoadingInitialData,
    isLoading,
    isEndReached,
    currentPage: data && data[data.length - 1]?.information.pageInfo.currentPage,
    totalPage: data && data[data.length - 1]?.information.pageInfo.totalPage,
  }); // 상태 값 디버깅용 로그 추가

  return { data, allPenaltyLists, error, isLoading, size, setSize, isEndReached };
};

// * 상/벌점 리스트 조회
export const usePointsDetail = () => {
  const { data, error, mutate } = useSWR<PointListResponse>(`${BASE_URL}/api/v1/web/points/detail`, fetchWithTokens);
  return { data, error, isLoading: !error && !data, mutate };
};

// * 상벌점 내역 등록
export const postPointsDetail = async (
  bonusPointList: { content: string; score: number }[],
  minusPointList: { content: string; score: number }[],
) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/points`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bonusPointList, minusPointList }),
  });
  return res;
};

// * 상/벌점 리스트 삭제
export const deletePointsDetail = async (pointId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/points/detail/${pointId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

// * 사생 상/벌점 리스트 삭제
export const deleteResidentsPointsDetail = async (residentId: number, userPointIds: number[]) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/points/${residentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      userPointIds.map((id) => ({
        userPointId: id,
      })),
    ),
  });
  return res;
};
