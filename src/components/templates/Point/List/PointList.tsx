'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React, { Fragment, useEffect, useState } from 'react';
import PointManagementListBody from './PointListBody';
import { PointMemberResponseDataList } from '@/types/point';
import { selectedMemberIdForPointState, selectedPointsForPenaltyState } from '@/recoil/point';
import { useRecoilState } from 'recoil';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import NoneList from '@/components/organisms/NoneList/NoneList';
import PenaltyHistoryPrompt from '../Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import SortIcon from '@/components/atoms/AllBtn/SortBtn/SortBtn';
import AlertPrompt from '../Prompt/AlertPrompt/AlertPrompt';
import { deletePointsDetail, deleteResidentsPointsDetail } from '@/apis/point';

type Props = {
  pointManagementLists: PointMemberResponseDataList[];
  isLoading: boolean;
  sortConfig: { sortBy: 'bonusPoint' | 'minusPoint' | 'name'; isAscending: boolean };
  setSortConfig: (config: { sortBy: 'bonusPoint' | 'minusPoint' | 'name'; isAscending: boolean }) => void;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const PointList = ({ pointManagementLists, isLoading, sortConfig, setSortConfig, isEndReached, setSize }: Props) => {
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForPointState);
  const [selectedPoints, setSelectedPoints] = useRecoilState(selectedPointsForPenaltyState); // 추가된 Recoil 상태
  const [isAllChecked, setIsAllChecked] = useState(false);
  const { isOpened, handleOpenModal } = usePointManagementModal();
  const [selectedResidentId, setSelectedResidentId] = useState<number | null>(null); // 클릭된 사생 ID

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

  const handleSort = (sortBy: 'bonusPoint' | 'minusPoint' | 'name') => {
    const isAscending = sortConfig.sortBy === sortBy ? !sortConfig.isAscending : true;
    setSortConfig({ sortBy, isAscending });
  };

  const getSortIconClass = (sortBy: 'bonusPoint' | 'minusPoint' | 'name') => {
    if (sortConfig.sortBy === sortBy) {
      return sortConfig.isAscending ? 'rotate-0 ' : 'rotate-180';
    }
    return '';
  };

  const getFillColor = (sortBy: 'bonusPoint' | 'minusPoint' | 'name') => {
    return sortConfig.sortBy === sortBy ? '#3678D8' : '#323232';
  };

  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  const handleOpenPenaltyHistory = (residentId: number) => {
    setSelectedResidentId(residentId); // 선택된 사생 ID 저장
    handleOpenModal('pointHistory'); // 모달 열기
  };

  const handleDeleteSelectedPoints = async () => {
    if (selectedResidentId === null || selectedPoints.length === 0) return;

    try {
      // 선택된 사생의 상/벌점 항목을 하나씩 삭제 요청
      for (const pointId of selectedPoints) {
        await deleteResidentsPointsDetail(selectedResidentId, [pointId]); // 배열에 하나의 ID만 포함
      }

      setSelectedPoints([]);
      handleOpenModal('pointGiveConfirm'); // 모달 닫기
      setSize(1); // 데이터 새로고침
    } catch (error) {
      console.error('Error deleting points:', error);
    }
  };

  return (
    <>
      {isOpened.pointHistory && selectedResidentId !== null && (
        <BackDrop isOpen={isOpened.pointHistory}>
          <PenaltyHistoryPrompt residentId={selectedResidentId} />
        </BackDrop>
      )}
      {isOpened.pointHistoryConfirm && selectedResidentId !== null && (
        <BackDrop isOpen={isOpened.pointHistoryConfirm}>
          <AlertPrompt
            variant={'blue'}
            label={'선택한 내역을 삭제하시겠습니까?'}
            modalName={'pointHistoryConfirm'}
            onConfirm={handleDeleteSelectedPoints} // 삭제 함수 연결
          />
        </BackDrop>
      )}
      <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
        <table className='w-[1250px]'>
          <thead className='w-full h-36 bg-white sticky top-0 z-1'>
            <tr className='text-gray-grayscale50'>
              <th className='H4 w-[8%]'>번호</th>
              <th
                className='h-30 rounded-8  cursor-pointer w-[8%]'
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
                className='h-30 rounded-8  cursor-pointer w-[10%]'
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
                className='h-30 rounded-8  cursor-pointer  w-[10%]'
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
              <th className='H4  w-[20%]'>건물</th>
              <th className='H4 w-[8%]'>호실</th>
              <th className='w-[8%]'>
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4 '>전체</h1>
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
          {pointManagementLists && pointManagementLists.length > 0 ? (
            <tbody className='overflow-y-scroll'>
              <tr className='h-14' />
              {pointManagementLists.map((i, key) => (
                <Fragment key={i.id}>
                  <PointManagementListBody
                    onClick={() => {
                      handleOpenModal('pointHistory'), setSelectedResidentId(i.id);
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
                    isChecked={selectedMemberId.includes(i.id)} // Recoil 상태를 기반으로 체크 상태 관리
                    setIsChecked={(isChecked) => handleMemberCheck(i.id, isChecked)} // 개별 학생 선택 시 상태 업데이트
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
