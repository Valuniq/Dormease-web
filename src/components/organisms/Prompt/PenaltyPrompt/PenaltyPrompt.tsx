import PenaltyBox, { PenaltyTextBox } from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';

type Props = {
  onConfirm: () => void;
  onConfirmDisabled: boolean;
  bonusTextBoxes: PenaltyTextBox[];
  setBonusTextBoxesTextBoxes: (updateFunction: (prevState: PenaltyTextBox[]) => PenaltyTextBox[]) => void;
  minusTextBoxes: PenaltyTextBox[];
  setMinusTextBoxesTextBoxes: (updateFunction: (prevState: PenaltyTextBox[]) => PenaltyTextBox[]) => void;
};

const PenaltyPrompt = ({
  bonusTextBoxes,
  setBonusTextBoxesTextBoxes,
  minusTextBoxes,
  setMinusTextBoxesTextBoxes,

  onConfirm,
  onConfirmDisabled,
}: Props) => {
  return (
    <div className='w-[1138px] h-686 flex flex-col items-center rounded-8 shadow-xl '>
      <PromptHeader />
      <div className='w-full pt-33 mb-5 flex justify-around items-start bg-gray-grayscale5'>
        <PenaltyBox type={'bonus'} textBoxes={bonusTextBoxes} setTextBoxes={setBonusTextBoxesTextBoxes} />
        <div className='w-2 h-546 bg-gray-grayscale20' />
        <PenaltyBox type={'minus'} textBoxes={minusTextBoxes} setTextBoxes={setMinusTextBoxesTextBoxes} />
      </div>
      <BtnMidVariant onClick={onConfirm} label={'저장하기'} disabled={onConfirmDisabled} variant={'blue'} />
    </div>
  );
};

export default PenaltyPrompt;
