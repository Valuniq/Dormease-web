'use client';
import PenaltyBox from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';

import { useRecoilValue } from 'recoil';
import { promptBonusState, promptClientBonusState, promptClientMinusState, promptMinusState } from '@/recoil';
import { useEffect } from 'react';
import { usePointDetailValidation } from '@/hooks/usePointDetailValidation';
import PromptHeader from '../PromptHeader/PromptHeader';

const PenaltyGivePrompt = () => {
  const bonusLists = useRecoilValue(promptBonusState);
  const minusLists = useRecoilValue(promptMinusState);
  const tempBonusLists = useRecoilValue(promptClientBonusState);
  const tempMinusLists = useRecoilValue(promptClientMinusState);
  const handleConfirm = () => {};
  const handleSaveDisabled = usePointDetailValidation([bonusLists, minusLists, tempBonusLists, tempMinusLists]);
  useEffect(() => {
    handleSaveDisabled();
  }, [bonusLists, minusLists, tempBonusLists, tempMinusLists]);
  return (
    <div className='w-[1138px] h-686 overflow-y-scroll flex flex-col items-center rounded-8 shadow-xl bg-gray-grayscale5 '>
      <div className='w-[1138px] fixed'>
        <PromptHeader modalName={'pointGive'} />
      </div>
      <div className='w-full pt-72 mb-5 flex justify-around items-start'>
        <div className='flex flex-col items-center justify-between h-full'>
          <PenaltyBox type={'BONUS'} />
          <div className='mb-23 mt-5'>
            <BtnMidVariant
              onClick={handleConfirm}
              label={'상점 부여'}
              disabled={!handleSaveDisabled()}
              variant={'green'}
            />
          </div>
        </div>
        <div className='w-2 min-h-546 h-full bg-gray-grayscale20' />
        <div className='flex flex-col items-center justify-between h-full'>
          <PenaltyBox type={'MINUS'} />
          <div className='mb-23 mt-5'>
            <BtnMidVariant
              onClick={handleConfirm}
              label={'벌점 부여'}
              disabled={!handleSaveDisabled()}
              variant={'red'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenaltyGivePrompt;
