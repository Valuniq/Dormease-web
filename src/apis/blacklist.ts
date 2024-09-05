import { BASE_URL } from '@/constants/path';
import { blacklistResponse, blacklistResponseDataList } from '@/types/blacklist';
import useSWRInfinite from 'swr/infinite';
import swrWithTokens from '@/utils/fetchWithTokens';

export const useInfiniteBlacklist = () => {
  // useSWRInfinite의 getKey 함수로 페이지 키 설정
  const getKey = (pageIndex: number, previousPageData: blacklistResponse) => {
    // 이전 페이지 데이터가 비어있으면 더 이상 가져올 데이터가 없으므로 null을 반환하여 요청을 중단
    if (previousPageData && previousPageData.information.dataList.length === 0) return null;
    // API 요청 URL을 반환, 페이지 인덱스에 따라 다른 페이지를 요청
    return `${BASE_URL}/api/v1/web/users/management/blacklist?page=${pageIndex + 1}`;
  };

  // useSWRInfinite 훅을 사용하여 데이터를 가져오기
  const { data, error, size, setSize, mutate } = useSWRInfinite<blacklistResponse>(getKey, swrWithTokens);

  // 가져온 데이터를 배열로 변환하여 블랙리스트 데이터 목록 만들기
  const blacklistsData: blacklistResponseDataList[] = data
    ? data.reduce((acc, cur) => acc.concat(cur.information.dataList), [] as blacklistResponseDataList[])
    : [];

  // 초기 데이터를 로딩 중인지 확인
  const isLoadingInitialData = !data && !error;
  // 더 많은 데이터를 로딩 중인지 확인
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  // 데이터가 비어 있는지 확인
  const isEmpty = data?.[0]?.information.dataList.length === 0;
  // 더 이상 가져올 데이터가 없는지 확인
  const isEndReached =
    isEmpty ||
    (data &&
      data[data.length - 1]?.information.pageInfo.currentPage ===
        data[data.length - 1]?.information.pageInfo.totalPage) ||
    false;

  return { blacklistsData, error, isLoadingMore, size, setSize, isEndReached, mutate };
};

// 여러 블랙리스트 항목 사유 업데이트 함수
export const updateBlacklistReasons = async (updates: { id: number; content: string }[]) => {
  try {
    // 모든 업데이트 요청을 병렬로 실행
    const updatePromises = updates.map(({ id, content }) =>
      swrWithTokens(`${BASE_URL}/api/v1/web/users/management/blacklist`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ blacklistId: id, content }]),
      }),
    );

    // 모든 요청이 완료될 때까지 기다림
    await Promise.all(updatePromises);
    console.log('Successfully updated all blacklist reasons.');
  } catch (error) {
    console.error('Error updating blacklist reasons:', error); // 에러 로그
    throw error;
  }
};

export const deleteBlacklists = async (ids: number[]) => {
  try {
    // 모든 삭제 요청을 병렬로 실행
    const deletePromises = ids.map((id) =>
      swrWithTokens(`${BASE_URL}/api/v1/web/users/management/blacklist/${id}`, {
        method: 'DELETE',
      }),
    );

    // 모든 요청이 완료될 때까지 기다림
    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error deleting blacklist items:', error); // 에러 로그
    throw error;
  }
};
