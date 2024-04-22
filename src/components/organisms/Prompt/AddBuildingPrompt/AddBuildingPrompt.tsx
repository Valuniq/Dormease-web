import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import Line from '@public/images/AddBuildingLine.png';
import Image, { StaticImageData } from 'next/image';
import BuildingOutBtn from '@public/images/BuildingOutBtn.svg';
import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';

type Props = {
  onBuildingOutClick: () => void;
  onAddBuilding: () => void;
  onAddPicture: () => void;
  selectImage: StaticImageData;
  input: string;
  setInput: (input: string) => void;
};

const AddBuildingPrompt = ({
  onBuildingOutClick,
  onAddBuilding,
  onAddPicture,
  selectImage,
  input,
  setInput,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='relative w-454 h-681 shadow-2xl rounded-8 flex flex-col items-center'>
      <button onClick={onBuildingOutClick}>
        <BuildingOutBtn className='absolute right-8 top-8' />
      </button>
      <div className='flex flex-col items-center mt-33'>
        <h1 className='H1 text-gray-grayscale50 mb-26'>건물명</h1>
        <h1 className='text-red-red20 mr-auto caption-2'>* 필수</h1>
        <input
          required
          placeholder='건물 이름'
          className='H2 w-337 h-59 focus:outline-none rounded-20 border-[1.5px] border-gray-grayscale30 px-17 placeholder:text-gray-grayscale30 text-gray-grayscale50'
          type='text'
          value={input}
          onChange={handleChange}
          maxLength={10}
        />
      </div>
      <Image src={Line} width={415.5} height={1} className='mt-32 mb-19' alt='line' />
      <div className='w-415 border-dotted flex flex-col items-center'>
        <h1 className='H1'>건물사진</h1>
        <div className='mt-45 w-381 h-241 flex items-center justify-center bg-gray-grayscale5 rounded-8'>
          {selectImage ? (
            <BuildingSelectImageBtn image={selectImage} onClick={onAddPicture} />
          ) : (
            <BtnLargeVariant label={'사진 추가'} disabled={false} variant={'blue'} onClick={onAddPicture} />
          )}
        </div>
      </div>
      <Image src={Line} width={415.5} height={1} className='mt-32 mb-19' alt='line' />
      <div className='w-415 border-dotted flex flex-col items-center'>
        <BtnMidVariant label={'건물 추가'} disabled={input === ''} variant={'blue'} onClick={onAddBuilding} />
      </div>
    </div>
  );
};

export default AddBuildingPrompt;
