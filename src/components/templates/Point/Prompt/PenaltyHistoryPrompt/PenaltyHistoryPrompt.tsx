'use client';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import PromptHeader from '../PromptHeader/PromptHeader';
import PenaltyHistoryListBody from './PenaltyHistoryListBody';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useInfinitePointsByResidentId } from '@/apis/point';
import { Fragment, useState } from 'react';
import { pointManagementModalState, selectedPointsForPenaltyState } from '@/recoil/point';
import { useRecoilState, useSetRecoilState } from 'recoil';

type Props = {
  residentId: number;
};

const PenaltyHistoryPrompt = ({ residentId }: Props) => {
  // 선택된 포인트 상태 관리
  const [selectedPoints, setSelectedPoints] = useRecoilState(selectedPointsForPenaltyState);
  const [isAllChecked, setIsAllChecked] = useState(false); // 전체 선택 체크박스 상태 관리
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);

  // 무한 스크롤을 사용하여 데이터 가져오기
  const { data, allPenaltyLists, isLoading, size, setSize, isEndReached } = useInfinitePointsByResidentId(residentId);

  const lastElementRef = useInfiniteScroll({
    isLoading: isLoading ?? false, // undefined일 경우 false로 설정
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  // 전체 선택 체크박스 핸들러
  const handleSelectAll = () => {
    setIsAllChecked((prev) => !prev); // 전체 선택 상태 변경
    if (!isAllChecked) {
      const allIds = allPenaltyLists.map((item) => item.userPointId); // 모든 항목의 ID 가져오기
      setSelectedPoints(allIds);
    } else {
      setSelectedPoints([]); // 선택 해제 시 빈 배열로 설정
    }
  };

  // 개별 포인트 선택 핸들러
  const handleSelectPoint = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedPoints((prev) => [...prev, id]); // 선택된 포인트 추가
    } else {
      setSelectedPoints((prev) => prev.filter((pointId) => pointId !== id)); // 선택 해제된 포인트 제거
    }
  };

  // 서버로부터 직접 받아온 상점 및 벌점 정보
  const bonusPoint = data && data[0]?.information.bonusPoint;
  const minusPoint = data && data[0]?.information.minusPoint;

  return (
    <div className='bg-white w-767 h-422 flex flex-col items-center rounded-8 shadow-xl '>
      <PromptHeader modalName={'pointHistory'} />
      <div className='w-709 mt-18 h-309 overflow-y-scroll border-b-1 border-b-[#323232]'>
        <table className='w-full'>
          <thead className='bg-white text-gray-grayscale40 w-full h-56 sticky top-0 z-1'>
            <tr className='pb-30'>
              <th className='H4'>날 짜</th>
              <th className='H4'>사 유</th>
              <th className='H4'>점 수</th>
              <th className='H4'>종 류</th>
              <th>
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>전체</h1>
                  <Checkbox isChecked={isAllChecked} setIsChecked={handleSelectAll} />
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan={5}>
                <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
              </th>
            </tr>
          </thead>
          <tbody>
            {allPenaltyLists.length > 0 ? (
              <>
                {allPenaltyLists.map((p, index) => (
                  <Fragment key={index}>
                    {/* 여백용 tr */}
                    <tr className='h-19' />
                    <tr>
                      <PenaltyHistoryListBody
                        date={p.createdDate}
                        reason={p.content}
                        score={p.score}
                        division={p.pointType}
                        isChecked={selectedPoints.includes(p.userPointId)}
                        setIsChecked={(isChecked) => handleSelectPoint(p.userPointId, isChecked)}
                      />
                    </tr>
                  </Fragment>
                ))}

                <tr ref={lastElementRef} />
              </>
            ) : (
              <tr>
                <td colSpan={5} className='text-center'>
                  No data available.
                </td>
              </tr>
            )}
            {/* 여백용 tr */}
            <tr className='h-19' />
          </tbody>
        </table>
      </div>
      <div className='mt-17 flex ml-auto mr-29 w-393 justify-between'>
        <BtnMiniVariant
          label={'삭제'}
          disabled={selectedPoints.length === 0}
          selected={false}
          variant={'blue'}
          onClick={() =>
            setPointManagementModal((prev: any) => ({ ...prev, pointHistory: false, pointHistoryConfirm: true }))
          }
        />
        <div className='flex'>
          <h1 className='caption-1 text-gray-grayscale50'>
            TOTAL - 상점 {bonusPoint}점 / 벌점 {minusPoint}점
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PenaltyHistoryPrompt;
