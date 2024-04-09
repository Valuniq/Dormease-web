import Image from 'next/image';
import PromptBodyWarning from '@public/images/PromptBodyWarning.png';
import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';

type Props = {
  label: string;
  onConfirm: () => void;
};

const AlertPrompt = ({ label, onConfirm }: Props) => {
  return (
    <div className='w-456 h-194 flex flex-col items-center rounded-8 shadow-xl '>
      <PromptHeader />
      <Image src={PromptBodyWarning} className='mt-19 mb-16' width={22} height={19} alt='promptBodyWarning' />
      <h1 className={`Alert-cap text-gray-grayscale50 text-h3`}>{label}</h1>
      <div className='ml-auto mt-29'>
        <AlertBtn label={'확인'} onClick={onConfirm} hoverColor={'blue'} />
      </div>
    </div>
  );
};

export default AlertPrompt;
