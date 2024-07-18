import Image from 'next/image';
import PromptWarning from '@public/images/PromptWarning.png';
import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';

type Props = {
  variant: 'blue' | 'red' | 'green';
  label: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmPrompt = ({ variant, label, onConfirm, onCancel }: Props) => {
  const getClassByVariant = (variant: string) => {
    switch (variant) {
      case 'blue':
        return { bgHeader: 'bg-blue-blue30' };
      case 'red':
        return { bgHeader: 'bg-red-red20' };
      case 'green':
        return { bgHeader: 'bg-green-green20' };
      default:
        return { bgHeader: 'bg-blue-blue30' };
    }
  };

  const { bgHeader } = getClassByVariant(variant);

  return (
    <div className='w-456 h-194 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15'>
      <PromptHeader bgColor={bgHeader} onCancel={onCancel} />
      <Image src={PromptWarning} className='mt-19 mb-16' width={22} height={19} alt='PromptWarning' />
      <h1 className='alert-cap text-gray-grayscale50 text-center'>
        {label.split('\\n').map((line, index) => (
          <p key={index} className='leading-25'>
            {line}
          </p>
        ))}
      </h1>
      <div className='ml-auto mt-auto'>
        <AlertBtn label={'확인'} onClick={onConfirm} hoverColor={variant} />
        <AlertBtn label={'닫기'} onClick={onCancel} hoverColor={variant} />
      </div>
    </div>
  );
};

export default ConfirmPrompt;
