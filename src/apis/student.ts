import { BASE_URL } from '@/constants/path';
import {
  StudentDetailResponse,
  StudentInfoEditRequest,
  StudentListResponse,
  StudentListResponseDataList,
  TermResponse,
} from '@/types/student';
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
  const { data, error } = useSWR<StudentDetailResponse>(
    `${BASE_URL}/api/v1/web/residents/${residentId}`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data };
};

//사생 정보 수정
export const putStudentInfo = async (
  residentId: number,
  copy: File | null,
  prioritySelectionCopy: File | null,
  updateResidentInfoReq: StudentInfoEditRequest,
) => {
  const formData = new FormData();

  if (copy) {
    formData.append('copy', copy);
  }
  if (prioritySelectionCopy) {
    formData.append('prioritySelectionCopy', prioritySelectionCopy);
  }

  formData.append(
    'updateResidentInfoReq',
    new Blob([JSON.stringify(updateResidentInfoReq)], { type: 'application/json' }),
  );

  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/residents/${residentId}`, {
    method: 'PUT',
    body: formData,
  });
  return res;
};

//사생 블랙리스트 처리
export const deleteStudentBlackList = async (residentId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/residents/${residentId}/blackList`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//사생 퇴사 처리
export const deleteStudentResign = async (residentId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/residents/${residentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//입사신청 및 거주기간 목록 조회
export const useDormTermList = () => {
  const { data, error } = useSWR<TermResponse>(
    `${BASE_URL}/api/v1/web/residents/manual/dormitoryApplicationSetting`,
    fetchWithTokens,
  );
  return { data, error, isLoading: !error && !data };
};

//사생 성별에 맞는 기숙사 조회
export const getDormList = async (residentId: number, termId: number) => {
  const res = await fetchWithTokens(`${BASE_URL}/api/v1/web/residents/${residentId}/dormitory/${termId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

//호실 배정 시 침대번호 및 룸메이트 정보 조회
export const getRoomManual = async (dormitoryId: number, roomNumber: number) => {
  const res = await fetchWithTokens(
    `${BASE_URL}/api/v1/web/residents/manual?dormitoryId=${dormitoryId}&roomNumber=${roomNumber}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return res;
};
