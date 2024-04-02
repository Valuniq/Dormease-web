import Image from 'next/image';
import PromptBodyWarning from '@public/images/PromptBodyWarning.png';
import PromptHeaderLogo from '@public/images/PromptHeaderLogo.png';
import PromptHeaderOut from '@public/images/PromptHeaderOut.png';

type Props = {
  variant: 'blue' | 'red' | 'green';
  label: string;
  onCancel: () => void; // 취소 버튼 클릭 핸들러
  onConfirm: () => void; // 확인 버튼 클릭 핸들러
};

const ConfirmPrompt = ({ variant, label, onCancel, onConfirm }: Props) => {
  // 클래스를 조건부로 설정하기 위한 함수
  const getClassByVariant = (variant: string) => {
    switch (variant) {
      case 'blue':
        return {
          bgHeader: 'bg-blue-blue30',
          hoverYesBtn: 'hover:bg-blue-blue30',
        };
      case 'red':
        return {
          bgHeader: 'bg-red-red20',
          hoverYesBtn: 'hover:bg-red-red20',
        };
      case 'green':
        return {
          bgHeader: 'bg-green-green20',
          hoverYesBtn: 'hover:bg-green-green20',
        };
      default:
        return {
          bgHeader: 'bg-blue-blue30',
          hoverYesBtn: 'hover:bg-blue-blue30',
        };
    }
  };
  // 주어진 색상에 따라 클래스 설정
  const { bgHeader, hoverYesBtn } = getClassByVariant(variant);
  return (
    <div className='w-456 h-194 flex flex-col items-center rounded-8 shadow-xl '>
      <div className={`w-456 h-39 ${bgHeader} flex justify-between pl-15 rounded-t-8`}>
        <Image src={PromptHeaderLogo} className='object-contain' width={39} height={11.65} alt='promptHeaderLogo' />
        <button
          onClick={() => onCancel}
          className={`hover:bg-red-red30 ${bgHeader} w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition`}
        >
          <Image src={PromptHeaderOut} className='object-contain' width={10} height={10} alt='promptHeaderOut' />
        </button>
      </div>
      <Image src={PromptBodyWarning} className='mt-19 mb-16' width={22} height={19} alt='promptBodyWarning' />
      <h1 className={`text-gray-grayscale50 text-h3`}>{label}</h1>
      <div className='ml-auto mt-29 '>
        <button
          onClick={() => onCancel}
          className='mr-16 w-86 h-32 rounded-20 hover:bg-gray-grayscale10 hover-transition'
        >
          <h1>취소</h1>
        </button>
        <button
          onClick={() => onConfirm}
          className={`mr-16 w-86 h-32 rounded-20 hover:text-white hover-transition ${hoverYesBtn}`}
        >
          <h1>확인</h1>
        </button>
      </div>
    </div>
  );
};

export default ConfirmPrompt;
