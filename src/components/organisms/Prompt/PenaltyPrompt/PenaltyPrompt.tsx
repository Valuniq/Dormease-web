'use client';
import PenaltyBox from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';
import { penaltyPromptBonusList, penaltyPromptMinusList } from '@/recoil';
import { useRecoilState } from 'recoil';
import { PointListResponseInfo } from '@/types/pointManagement';

type Props = {
  onConfirm: () => void;
  onConfirmDisabled: boolean;
};

const PenaltyPrompt = ({ onConfirm, onConfirmDisabled }: Props) => {
  const [bonusLists, setBonusLists] = useRecoilState(penaltyPromptBonusList);
  const [minusLists, setMinusLists] = useRecoilState(penaltyPromptMinusList);

  const addBonusTextBox = () => {
    setBonusLists((prevState: PointListResponseInfo[]) => [...prevState, { label: '', score: 0 }]);
  };
  const addMinusTextBox = () => {
    setMinusLists((prevState: PointListResponseInfo[]) => [...prevState, { label: '', score: 0 }]);
  };

  return (
    <div className='w-[1138px] h-686 overflow-y-scroll flex flex-col items-center rounded-8 shadow-xl bg-gray-grayscale5 '>
      <div className='w-[1138px] fixed'>
        <PromptHeader />
      </div>
      <div className='w-full pt-72 mb-5 flex justify-around items-start'>
        <PenaltyBox addTextBox={addBonusTextBox} type={'bonus'} />
        <div className='w-2 min-h-546 h-full bg-gray-grayscale20' />
        <PenaltyBox addTextBox={addMinusTextBox} type={'minus'} />
      </div>
      <div className='mb-23 mt-5'>
        <BtnMidVariant onClick={onConfirm} label={'저장하기'} disabled={onConfirmDisabled} variant={'blue'} />
      </div>
    </div>
  );
};

export default PenaltyPrompt;
