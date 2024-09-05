'use client';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { ResidentPointResponseUserPointDetailRes } from '@/types/point';
import PromptHeader from '../PromptHeader/PromptHeader';
import PenaltyHistoryListBody from './PenaltyHistoryListBody';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { deletePointsDetail, deleteResidentsPointsDetail, useInfinitePointsByResidentId } from '@/apis/point';
import { Fragment, useState } from 'react';
import { pointManagementModalState, selectedPointsForPenaltyState } from '@/recoil/point';
import { useRecoilState, useSetRecoilState } from 'recoil';

type Props = {
  residentId: number;
};

const PenaltyHistoryPrompt = ({ residentId }: Props) => {
  const [selectedPoints, setSelectedPoints] = useRecoilState(selectedPointsForPenaltyState);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);
  const { allPenaltyLists, data, error, isLoadingMore, size, setSize, isEndReached } =
    useInfinitePointsByResidentId(residentId);

  const handleIntersect = () => {
    if (!isEndReached && !isLoadingMore) {
      console.log(`Requesting next page: ${size + 1}`); // 디버깅용 로그
      setSize(size + 1); // 페이지 증가
    }
  };

  const lastElementRef = useInfiniteScroll({
    isLoading: isLoadingMore ?? false, // undefined를 방지하기 위해 기본값을 false로 설정
    isEndReached: isEndReached ?? false, // undefined를 방지하기 위해 기본값을 false로 설정
    onIntersect: handleIntersect,
  });

  const handleSelectAll = () => {
    setIsAllChecked((prev) => !prev);
    if (!isAllChecked) {
      const allIds = allPenaltyLists.map((item) => item.userPointId);
      setSelectedPoints(allIds);
    } else {
      setSelectedPoints([]);
    }
  };

  const handleSelectPoint = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedPoints((prev) => [...prev, id]);
    } else {
      setSelectedPoints((prev) => prev.filter((pointId) => pointId !== id));
    }
  };

  // `bonusPoint`와 `minusPoint`를 서버로부터 직접 받아와서 사용
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
              allPenaltyLists.map((p, index) => (
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
              ))
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
        {/* 마지막 요소의 ref 설정 */}
        <div ref={lastElementRef} />
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
