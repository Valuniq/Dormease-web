import { BASE_URL } from '@/constants/path';
import { StudentDetailResponse, StudentListResponse, StudentListResponseDataList } from '@/types/student';
import fetchWithTokens from '@/utils/fetchWithTokens';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

//사생 목록 조회 및 정렬
export const useStudentList = (sortBy: string, isAscending: boolean) => {
  const getKey = (pageIndex: number, previousPageData: StudentListResponse | null) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/residents?sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<StudentListResponse>(getKey, fetchWithTokens);

  const studentData: StudentListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as StudentListResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoading = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { studentData, error, isLoading, size, setSize, isEndReached, mutate };
};

//사생 검색 및 정렬
export const useStudentSearchList = (keyword: string, sortBy: string, isAscending: boolean) => {
  const getKey = (pageIndex: number, previousPageData: StudentListResponse | null) => {
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    return `${BASE_URL}/api/v1/web/residents/search?keyword=${keyword}&sortBy=${sortBy}&isAscending=${isAscending}&page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize, mutate } = useSWRInfinite<StudentListResponse>(getKey, fetchWithTokens);

  const studentData: StudentListResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as StudentListResponseDataList[])
    : [];

  const isLoadingInitialData = !data && !error;
  const isLoading = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { studentData, error, isLoading, size, setSize, isEndReached, mutate };
};

//사생 상세 조회
export const useStudentDetail = (residentId: number) => {
  const { data, error, mutate } = useSWR<StudentDetailResponse>(
    `${BASE_URL}/api/v1/web/residents/${residentId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data, mutate };
};
