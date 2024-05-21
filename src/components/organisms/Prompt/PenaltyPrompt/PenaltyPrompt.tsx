'use client';
import PenaltyBox from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';
import { useRecoilState } from 'recoil';
import { PointListResponseInfo } from '@/types/pointManagement';
import { promptBonusState, promptClientBonusState, promptClientMinusState, promptMinusState } from '@/recoil';
import { useEffect } from 'react';
import { usePointDetailValidation } from '@/hooks/usePointDetailValidation';

type Props = {
  onConfirm: () => void;
  onConfirmDisabled: boolean;
};

const PenaltyPrompt = ({ onConfirm, onConfirmDisabled }: Props) => {
  const [bonusLists, setBonusLists] = useRecoilState(promptBonusState);
  const [minusLists, setMinusLists] = useRecoilState(promptMinusState);
  const [tempBonusLists, setTempBonusLists] = useRecoilState(promptClientBonusState);
  const [tempMinusLists, setTempMinusLists] = useRecoilState(promptClientMinusState);
  const handleSaveDisabled = usePointDetailValidation([bonusLists, minusLists, tempBonusLists, tempMinusLists]);
  useEffect(() => {
    handleSaveDisabled();
  }, [bonusLists, minusLists, tempBonusLists, tempMinusLists]);
  return (
    <div className='w-[1138px] h-686 overflow-y-scroll flex flex-col items-center rounded-8 shadow-xl bg-gray-grayscale5 '>
      <div className='w-[1138px] fixed'>
        <PromptHeader />
      </div>
      <div className='w-full pt-72 mb-5 flex justify-around items-start'>
        <PenaltyBox type={'BONUS'} />
        <div className='w-2 min-h-546 h-full bg-gray-grayscale20' />
        <PenaltyBox type={'MINUS'} />
      </div>
      <div className='mb-23 mt-5'>
        <BtnMidVariant onClick={onConfirm} label={'저장하기'} disabled={!handleSaveDisabled()} variant={'blue'} />
      </div>
    </div>
  );
};

export default PenaltyPrompt;
