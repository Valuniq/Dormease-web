import Image from 'next/image';

import PromptHeaderLogo from '@public/images/PromptHeaderLogo.png';
import PromptHeaderOut from '@public/images/PromptHeaderOut.png';
import PenaltyBox from './PenaltyBox';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const PenaltyPrompt = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className='w-[1138px] h-686 flex flex-col items-center rounded-8 shadow-xl '>
      <div className='w-[1138px] h-39 flex justify-between bg-blue-blue30 pl-15 rounded-t-8'>
        <Image src={PromptHeaderLogo} className='object-contain' width={39} height={11.65} alt='promptHeaderLogo' />
        <button
          onClick={() => onCancel}
          className={`hover:bg-red-red30 bg-blue-blue30 w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`}
        >
          <Image src={PromptHeaderOut} className='object-contain' width={10} height={10} alt='promptHeaderOut' />
        </button>
      </div>
      <div className='w-full mt-33 mb-5 flex justify-around items-start'>
        <PenaltyBox type={'bonus'} />
        <div className='w-2 h-546 bg-gray-grayscale20' />
        <PenaltyBox type={'minus'} />
      </div>
      <BtnMidVariant label={'저장하기'} disabled={false} variant={'blue'} />
    </div>
  );
};

export default PenaltyPrompt;
