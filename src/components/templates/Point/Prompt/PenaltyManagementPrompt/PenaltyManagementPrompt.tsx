'use client';
import PenaltyBox from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  pointManagementModalState,
  promptBonusState,
  promptClientBonusState,
  promptClientMinusState,
  promptMinusState,
} from '@/recoil';
import { useCallback, useEffect, useState } from 'react';
import { usePointDetailValidation } from '@/hooks/usePointDetailValidation';

import PromptHeader from '../PromptHeader/PromptHeader';
import { usePointsDetail } from '@/apis/point';
import { PointListResponseInfo } from '@/types/point';

type Props = {
  onDelete: (deletedIds: number[]) => void; // 삭제할 ID를 설정하는 함수
};

const PenaltyManagementPrompt = ({ onDelete }: Props) => {
  // 상벌점 내역 조회
  const { data: pointsDetailData, error, isLoading } = usePointsDetail();
  const [bonusLists, setBonusLists] = useRecoilState(promptBonusState);
  const [minusLists, setMinusLists] = useRecoilState(promptMinusState);
  const tempBonusLists = useRecoilValue(promptClientBonusState);
  const tempMinusLists = useRecoilValue(promptClientMinusState);
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);

  const [initialBonusLists, setInitialBonusLists] = useState<PointListResponseInfo[]>([]);
  const [initialMinusLists, setInitialMinusLists] = useState<PointListResponseInfo[]>([]);

  // usePointDetailValidation 훅을 최상위에서 호출
  const isSaveDisabled = usePointDetailValidation([bonusLists, minusLists, tempBonusLists, tempMinusLists]);

  // 저장 버튼 활성화 여부를 위한 콜백을 useCallback으로 메모이제이션
  const handleSaveDisabled = useCallback(() => isSaveDisabled, [isSaveDisabled]);

  useEffect(() => {
    handleSaveDisabled();
  }, [handleSaveDisabled]);

  // 데이터가 조회되면 해당 데이터를 사용하여 리스트를 초기화
  useEffect(() => {
    if (pointsDetailData) {
      const bonusPoints = pointsDetailData.information.filter((item) => item.pointType === 'BONUS');
      const minusPoints = pointsDetailData.information.filter((item) => item.pointType === 'MINUS');
      setBonusLists(bonusPoints);
      setMinusLists(minusPoints);
      setInitialBonusLists(bonusPoints); // 초기 상태 저장
      setInitialMinusLists(minusPoints); // 초기 상태 저장
    }
  }, [pointsDetailData, setBonusLists, setMinusLists]);

  // 삭제할 ID를 추적하기 위해 상태 변경 시 비교
  useEffect(() => {
    const deletedBonusIds = initialBonusLists
      .filter((initial) => !bonusLists.some((current) => current.pointId === initial.pointId))
      .map((b) => b.pointId);
    const deletedMinusIds = initialMinusLists
      .filter((initial) => !minusLists.some((current) => current.pointId === initial.pointId))
      .map((m) => m.pointId);
    onDelete([...deletedBonusIds, ...deletedMinusIds]); // 삭제할 ID 설정
  }, [bonusLists, minusLists, initialBonusLists, initialMinusLists, onDelete]);

  return (
    // overflow-y-scroll 임시 삭제
    <div className='w-[1138px] h-686 flex flex-col items-center rounded-8 shadow-xl bg-gray-grayscale5 '>
      <div className='w-full fixed'>
        <PromptHeader modalName={'pointManagement'} />
      </div>
      <div className='w-full overflow-y-scroll  pt-72 mb-5 flex justify-around items-start'>
        <PenaltyBox type={'BONUS'} />
        <div className='w-2 min-h-546 h-full bg-gray-grayscale20' />
        <PenaltyBox type={'MINUS'} />
      </div>
      <div className='mb-23 mt-5'>
        <BtnMidVariant
          onClick={() =>
            setPointManagementModal((prev: any) => ({ ...prev, pointManagement: false, pointManagementConfirm: true }))
          }
          label={'저장하기'}
          disabled={!handleSaveDisabled()}
          variant={'blue'}
        />
      </div>
    </div>
  );
};

export default PenaltyManagementPrompt;
