import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import Line from '@public/images/AddBuildingLine.png';
import Image from 'next/image';

const AddBuildingPrompt = () => {
  return (
    <div className='w-454 h-681 shadow-2xl rounded-8 flex flex-col items-center'>
      <div className='flex flex-col items-center mt-33'>
        <h1 className='H1 text-gray-grayscale50 mb-26'>건물명</h1>
        <h1 className='text-red-red20 mr-auto caption-2'>* 필수</h1>
        <input
          required
          placeholder='플레이스 홀더 텍스트'
          className='H2 w-337 h-59 focus:outline-none rounded-20 border-[1.5px] border-gray-grayscale30 px-17 placeholder:text-gray-grayscale30 text-gray-grayscale50'
        />
      </div>
      <Image src={Line} width={415.5} height={1} className='mt-32 mb-19' alt='line' />
      <div className='w-415 border-dotted flex flex-col items-center'>
        <h1 className='H1'>건물사진</h1>
        <div className='mt-45 w-381 h-241 flex items-center justify-center bg-gray-grayscale5 rounded-8'>
          <BtnLargeVariant label={'사진 추가'} disabled={false} variant={'blue'} />
        </div>
      </div>
      <Image src={Line} width={415.5} height={1} className='mt-32 mb-19' alt='line' />
      <div className='w-415 border-dotted flex flex-col items-center'>
        <BtnMidVariant label={'건물 추가'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default AddBuildingPrompt;
