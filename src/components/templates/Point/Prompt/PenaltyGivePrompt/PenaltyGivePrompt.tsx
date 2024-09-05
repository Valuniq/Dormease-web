'use client';
import PenaltyBox from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pointManagementModalState, selectedMemberIdForPointState } from '@/recoil';
import { useState } from 'react';
import PromptHeader from '../PromptHeader/PromptHeader';

type Props = {
  selectedBonusPoints: number[]; // 상점 목록
  setSelectedBonusPoints: (points: number[]) => void; // 상점 목록 업데이트 함수
  selectedMinusPoints: number[]; // 벌점 목록
  setSelectedMinusPoints: (points: number[]) => void; // 벌점 목록 업데이트 함수
};

const PenaltyGivePrompt = ({
  selectedBonusPoints,
  setSelectedBonusPoints,
  selectedMinusPoints,
  setSelectedMinusPoints,
}: Props) => {
  const selectedMemberIds = useRecoilValue(selectedMemberIdForPointState); // 선택된 학생 ID들
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);

  return (
    <div className='w-[1138px] h-686 flex flex-col items-center rounded-8 shadow-xl bg-gray-grayscale5 '>
      <div className='w-[1138px] fixed'>
        <PromptHeader modalName={'pointGive'} />
      </div>
      <div className='w-full overflow-y-scroll pt-72 mb-5 flex justify-around items-start'>
        <div className='flex flex-col items-center justify-between h-full'>
          <PenaltyBox type={'BONUS'} onSelectedChange={setSelectedBonusPoints} />
        </div>
        <div className='w-2 min-h-546 h-full bg-gray-grayscale20' />
        <div className='flex flex-col items-center justify-between h-full'>
          <PenaltyBox type={'MINUS'} onSelectedChange={setSelectedMinusPoints} />
        </div>
      </div>
      <div className='mb-23 mt-5'>
        <BtnMidVariant
          onClick={() =>
            setPointManagementModal((prev: any) => ({ ...prev, pointGive: false, pointGiveConfirm: true }))
          }
          label={'점수 부여'}
          disabled={
            (selectedBonusPoints.length === 0 && selectedMinusPoints.length === 0) || selectedMemberIds.length === 0
          }
          variant={'blue'}
        />
      </div>
    </div>
  );
};

export default PenaltyGivePrompt;
