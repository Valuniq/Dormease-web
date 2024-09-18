'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React, { Fragment, useState } from 'react';
import PointManagementListBody from './PointListBody';
import { PointMemberResponseDataList } from '@/types/point';
import {
  pointManagementModalState,
  selectedMemberIdForPointState,
  selectedPointsForPenaltyState,
} from '@/recoil/point';
import { useRecoilState, useSetRecoilState } from 'recoil';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import NoneList from '@/components/organisms/NoneList/NoneList';
import PenaltyHistoryPrompt from '../Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import SortIcon from '@/components/atoms/AllBtn/SortBtn/SortBtn';
import AlertPrompt from '../Prompt/AlertPrompt/AlertPrompt';
import { deleteResidentsPointsDetail, usePointsDetail } from '@/apis/point';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';

type Props = {
  pointManagementLists: PointMemberResponseDataList[];
  isLoading: boolean;
  isLoadingInitialData: boolean;
  sortConfig: { sortBy: 'bonusPoint' | 'minusPoint' | 'name'; isAscending: boolean };
  setSortConfig: (config: { sortBy: 'bonusPoint' | 'minusPoint' | 'name'; isAscending: boolean }) => void;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const PointList = ({
  pointManagementLists,
  isLoading,
  isLoadingInitialData,
  sortConfig,
  setSortConfig,
  isEndReached,
  setSize,
}: Props) => {
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForPointState);
  const [selectedPoints, setSelectedPoints] = useRecoilState(selectedPointsForPenaltyState);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const { isOpened, handleOpenModal, handleCloseModal } = usePointManagementModal();
  const [selectedResidentId, setSelectedResidentId] = useState<number | null>(null);
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);

  // 전체 선택/해제 체크박스 클릭 시 호출되는 함수
  const handleAllCheck = () => {
    if (!isAllChecked) {
      const allMemberIds = pointManagementLists.map((member) => member.id);
      setSelectedMemberId(allMemberIds);
    } else {
      setSelectedMemberId([]);
    }
    setIsAllChecked(!isAllChecked);
  };

  // 개별 학생 체크박스 선택 시 Recoil 상태 업데이트
  const handleMemberCheck = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedMemberId((prev) => [...prev, id]);
    } else {
      setSelectedMemberId((prev) => prev.filter((memberId) => memberId !== id));
    }
  };

  // 정렬 핸들러
  const handleSort = (sortBy: 'bonusPoint' | 'minusPoint' | 'name') => {
    const isAscending = sortConfig.sortBy === sortBy ? !sortConfig.isAscending : true;
    setSortConfig({ sortBy, isAscending });
  };

  // 정렬 아이콘 클래스 설정
  const getSortIconClass = (sortBy: 'bonusPoint' | 'minusPoint' | 'name') => {
    if (sortConfig.sortBy === sortBy) {
      return sortConfig.isAscending ? 'rotate-0 ' : 'rotate-180';
    }
    return '';
  };

  // 정렬 아이콘 색상 설정
  const getFillColor = (sortBy: 'bonusPoint' | 'minusPoint' | 'name') => {
    return sortConfig.sortBy === sortBy ? '#3678D8' : '#323232';
  };

  // 무한 스크롤 설정
  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  // 선택된 상/벌점 삭제 핸들러
  const handleDeleteSelectedPoints = async () => {
    if (selectedResidentId === null || selectedPoints.length === 0) return;

    handleOpenModal('pointHistoryConfirm'); // 모달 열기

    const deletePoints = async () => {
      try {
        for (const pointId of selectedPoints) {
          await deleteResidentsPointsDetail(selectedResidentId, [pointId]);
        }
        setSelectedPoints([]);
        setPointManagementModal((prev) => ({ ...prev, pointHistoryConfirm: false })); // 모달 닫기
        setSize(1); // 데이터 새로고침
      } catch (error) {
        console.error('Error deleting points', error);
      }
    };
    return deletePoints();
  };

  // 상벌점 내역 조회
  const { data: pointsDetailData, error } = usePointsDetail();

  const handlePointHistoryIsNull = () => {
    setPointManagementModal((prev) => ({ ...prev, pointHistory: false }));
  };

  return (
    <>
      {/* 모달 관리 */}
      {isOpened.pointHistory && selectedResidentId !== null && (
        <BackDrop isOpen={isOpened.pointHistory}>
          {pointsDetailData?.information.length === 0 ? (
            <AlertPrompt
              variant={'blue'}
              label={'상/벌점 리스트를 작성해주시기 바랍니다.'}
              modalName={'pointHistory'}
              onConfirm={handlePointHistoryIsNull}
            />
          ) : (
            <PenaltyHistoryPrompt residentId={selectedResidentId} />
          )}
        </BackDrop>
      )}
      {isOpened.pointHistoryConfirm && selectedResidentId !== null && (
        <BackDrop isOpen={isOpened.pointHistoryConfirm}>
          <ConfirmPrompt
            variant={'blue'}
            label={'선택한 내역을 삭제하시겠습니까?'}
            onCancel={() => {
              handleCloseModal('pointHistoryConfirm'), handleOpenModal('pointHistory');
            }}
            onConfirm={handleDeleteSelectedPoints}
          />
        </BackDrop>
      )}

      {/* 테이블 및 데이터 목록 */}
      <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
        <table className='w-[1250px]'>
          <thead className='w-full h-36 bg-white sticky top-0 z-1'>
            <tr className='text-gray-grayscale50'>
              <th className='H4 w-[8%]'>번호</th>
              <th
                className='h-30 rounded-8 cursor-pointer w-[8%]'
                onClick={() => handleSort('name')}
                style={{ backgroundColor: sortConfig.sortBy === 'name' ? '#DAE9FF' : 'transparent' }}
              >
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>이름</h1>
                  <SortIcon
                    className={`object-contain ${getSortIconClass('name')}`}
                    width={16}
                    height={8}
                    fillColor={getFillColor('name')}
                  />
                </div>
              </th>
              <th className='H4 w-[12%]'>학번</th>
              <th className='H4 w-[16%]'>전화번호</th>
              <th
                className='h-30 rounded-8 cursor-pointer w-[10%]'
                onClick={() => handleSort('bonusPoint')}
                style={{ backgroundColor: sortConfig.sortBy === 'bonusPoint' ? '#DAE9FF' : 'transparent' }}
              >
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>상점</h1>
                  <SortIcon
                    className={`object-contain ${getSortIconClass('bonusPoint')}`}
                    width={16}
                    height={8}
                    fillColor={getFillColor('bonusPoint')}
                  />
                </div>
              </th>
              <th
                className='h-30 rounded-8 cursor-pointer w-[10%]'
                onClick={() => handleSort('minusPoint')}
                style={{ backgroundColor: sortConfig.sortBy === 'minusPoint' ? '#DAE9FF' : 'transparent' }}
              >
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>벌점</h1>
                  <SortIcon
                    className={`object-contain ${getSortIconClass('minusPoint')}`}
                    width={16}
                    height={8}
                    fillColor={getFillColor('minusPoint')}
                  />
                </div>
              </th>
              <th className='H4 w-[20%]'>건물</th>
              <th className='H4 w-[8%]'>호실</th>
              <th className='w-[8%]'>
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>전체</h1>
                  <Checkbox isChecked={isAllChecked} setIsChecked={handleAllCheck} />
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan={9}>
                <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
              </th>
            </tr>
          </thead>
          {isLoadingInitialData ? (
            <tbody>
              <tr>
                <td colSpan={9}> 로딩 컴포넌트 제작 후 import</td>
              </tr>
            </tbody>
          ) : pointManagementLists && pointManagementLists.length > 0 ? (
            <tbody className='overflow-y-scroll'>
              <tr className='h-14' />
              {pointManagementLists.map((i, key) => (
                <Fragment key={key}>
                  <PointManagementListBody
                    onClick={() => {
                      handleOpenModal('pointHistory');
                      setSelectedResidentId(i.id);
                    }}
                    index={key + 1}
                    data={{
                      id: i.id,
                      name: i.name,
                      studentNumber: i.studentNumber,
                      phoneNumber: i.phoneNumber,
                      bonusPoint: i.bonusPoint,
                      minusPoint: i.minusPoint,
                      dormitory: i.dormitory,
                      room: i.room,
                    }}
                    isChecked={selectedMemberId.includes(i.id)}
                    setIsChecked={(isChecked) => handleMemberCheck(i.id, isChecked)}
                    ref={lastElementRef}
                  />
                  <tr className='h-14' />
                </Fragment>
              ))}
            </tbody>
          ) : (
            <tbody className='h-full'>
              <NoneList colspan={9} />
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default PointList;
