import Image from 'next/image';
import promptBodyWarning from '@public/images/promptBodyWarning.png';
import promptHeaderLogo from '@public/images/promptHeaderLogo.png';
import promptHeaderOut from '@public/images/promptHeaderOut.png';

const prompt = ({ ...props }) => {
  return (
    <div className='w-456 h-194 flex flex-col items-center rounded-8 shadow-xl '>
      <div className='w-456 h-39 bg-blue-blue30 flex justify-between pl-15 rounded-t-8'>
        <Image src={promptHeaderLogo} className='object-contain' width={39} height={11.65} alt='promptHeaderLogo' />
        <button
          {...props}
          className='hover:bg-red-red30 bg-blue-blue30 w-39 h-39 flex items-center justify-center rounded-tr-8 hover-transition'
        >
          <Image src={promptHeaderOut} className='object-contain' width={10} height={10} alt='promptHeaderOut' />
        </button>
      </div>
      <Image src={promptBodyWarning} className='mt-19 mb-16' width={22} height={19} alt='promptBodyWarning' />
      <h1 className={`text-gray-grayscale50 text-h3`}>이름을 작성해 주시기 바랍니다.</h1>
      <button
        {...props}
        className='ml-auto mr-16 mt-29 w-86 h-32 rounded-20 hover:bg-blue-blue30 hover:text-white hover-transition'
      >
        <h1>확인</h1>
      </button>
    </div>
  );
};

export default prompt;
