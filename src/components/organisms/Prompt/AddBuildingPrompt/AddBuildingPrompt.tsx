import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import LoginInputText from '@/components/atoms/InputText/LoginInputText/LoginInputText';

const AddBuildingPrompt = () => {
  return (
    <div className='w-454 h-681 shadow-2xl rounded-8 flex flex-col items-center'>
      <div className='flex flex-col items-center mt-33'>
        <h1 className='text-gray-grayscale50 mb-26'>건물명</h1>
        <h1 className='text-red-red20 ml-auto'>*</h1>
        <input
          required
          placeholder='플레이스 홀더 텍스트'
          className=' w-337 h-59 focus:outline-none rounded-20 border-[1.5px] border-gray-grayscale30 px-17 placeholder:text-gray-grayscale30 text-gray-grayscale50'
        />
      </div>
      <div className='w-415 border-dotted flex flex-col items-center border-t-[1.27px] border-t-gray-grayscale1 mt-32 pt-19 '>
        <h1>건물사진</h1>
        <div className='mt-45 w-381 h-241 flex items-center justify-center bg-gray-grayscale5 rounded-8'>
          <BtnLargeVariant label={'사진 추가'} disabled={false} variant={'blue'} />
        </div>
      </div>
      <div className='w-415 border-dotted flex flex-col items-center border-t-[1.27px] border-t-gray-grayscale1 mt-32 pt-19 '>
        <BtnMidVariant label={'건물 추가'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default AddBuildingPrompt;
