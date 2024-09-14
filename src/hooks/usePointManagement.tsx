import { useEffect, useState } from 'react';
import {
  deletePointsDetail,
  postPointsDetail,
  postMemberPoint,
  useInfinitePointMember,
  useInfinitePointMemberSearch,
  usePointsDetail,
} from '@/apis/point';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  promptClientBonusState,
  promptClientMinusState,
  selectedMemberIdForPointState,
  pointManagementModalState,
} from '@/recoil/point';

// 상벌점 관리 page의 복잡도를 줄이기 위한 hook
export const usePointManagement = () => {
  // 검색어 상태 및 검색 여부를 관리하는 상태
  const [input, setInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  // 검색어 핸들러
  const handleSearch = () => {
    if (input.trim() === '') {
      setIsSearch(false);
    } else if (input !== searchKeyword || !isSearch) {
      setSearchKeyword(input);
      setIsSearch(true);
    }
  };

  useEffect(() => {
    if (input.trim() === '') {
      setIsSearch(false);
    }
  }, [input]);

  // 정렬 설정을 관리하는 상태
  const [sortConfig, setSortConfig] = useState<{ sortBy: 'name' | 'bonusPoint' | 'minusPoint'; isAscending: boolean }>({
    sortBy: 'name',
    isAscending: true,
  });

  // 선택된 학생 id 관리
  const selectedMemberId = useRecoilValue(selectedMemberIdForPointState);

  // 새로 등록된 상/벌점 리스트 관리
  const [tempBonusLists, setTempBonusLists] = useRecoilState(promptClientBonusState);
  const [tempMinusLists, setTempMinusLists] = useRecoilState(promptClientMinusState);

  // points에서 사용되는 모달창 관리
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);

  // 삭제할 상벌점 id 상태
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  // 상벌점 데이터 캐시 갱신
  const { mutate: pointsMutate } = usePointsDetail();

  // 무한 스크롤을 사용자 목록 및 검색 결과
  const infiniteUser = useInfinitePointMember(sortConfig.sortBy, sortConfig.isAscending);
  const userSearch = useInfinitePointMemberSearch(searchKeyword, sortConfig.sortBy, sortConfig.isAscending);

  const { userData, isLoadingMore, setSize, isEndReached, mutate: userMutate } = isSearch ? userSearch : infiniteUser;

  // 상점/벌점 부여에 필요한 상태 추가
  const [selectedBonusPoints, setSelectedBonusPoints] = useState<number[]>([]); // 선택된 상점 포인트 목록
  const [selectedMinusPoints, setSelectedMinusPoints] = useState<number[]>([]); // 선택된 벌점 포인트 목록

  // 상벌점 내역 삭제 핸들러
  const handleDelete = async () => {
    for (const id of deletedIds) {
      await deletePointsDetail(id);
    }
  };

  // 상벌점 저장 클릭 시 등록/삭제 호출
  const handlePointManagemengConfirm = async () => {
    try {
      // 삭제할 항목 먼저 삭제
      await handleDelete();
      // 유효한 상점과 벌점 내역만 필터링
      const filteredBonusLists = tempBonusLists.filter((list) => list.content && list.score > 0);
      const filteredMinusLists = tempMinusLists.filter((list) => list.content && list.score > 0);
      // 상벌점 내역 등록
      await postPointsDetail(filteredBonusLists, filteredMinusLists);
      // 등록 후 임시 상태를 초기화
      setTempBonusLists([{ content: '', score: 0, pointType: 'BONUS', pointId: -1 }]);
      setTempMinusLists([{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }]);
      setPointManagementModal((prev) => ({ ...prev, pointManagement: false, pointManagementConfirm: false }));
      // 데이터 새로고침 (캐시 무효화)
      await pointsMutate();
    } catch (error) {
      console.error('상벌점 내역 등록 혹은 삭제 실패', error);
    }
  };

  // 점수 부여 함수
  const handleGrantPoints = async () => {
    const pointsToGrant = [...selectedBonusPoints, ...selectedMinusPoints]; // 상점과 벌점을 통합
    if (selectedMemberId.length === 0 || pointsToGrant.length === 0) return;

    try {
      for (const studentId of selectedMemberId) {
        await postMemberPoint(
          studentId,
          pointsToGrant.map((id) => ({ pointId: id })),
        );
      }
      userMutate(); // userData를 갱신하기 위해 mutate 호출
      setPointManagementModal((prev) => ({ ...prev, pointGiveConfirm: false })); // 모달 닫기
    } catch (error) {
      console.error('점수 부여 실패:', error);
    }
  };

  return {
    // 검색창 관리
    input,
    setInput,
    searchKeyword,
    isSearch,
    handleSearch,
    // 무한 스크롤 관리
    userData,
    isLoadingMore,
    setSize,
    isEndReached,
    sortConfig,
    setSortConfig,
    // 상/벌점 리스트 관리
    handlePointManagemengConfirm,
    setDeletedIds,
    // 학생 선택 관리
    selectedMemberId,
    // user, points 데이터 갱신
    pointsMutate,
    userMutate,
    // 상/벌점 부여
    selectedBonusPoints,
    setSelectedBonusPoints,
    selectedMinusPoints,
    setSelectedMinusPoints,
    handleGrantPoints,
  };
};
