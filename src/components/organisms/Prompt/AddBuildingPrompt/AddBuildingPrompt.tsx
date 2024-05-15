import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import Line from '@public/images/AddBuildingLine.png';
import Image from 'next/image';
import BuildingOutBtn from '@public/images/BuildingOutBtn.svg';
import BuildingSelectImageBtn from '@/components/atoms/AllBtn/BuildingSelectImageBtn/BuildingSelectImageBtn';
import { useRef, useState } from 'react';

type Props = {
  onBuildingOutClick: () => void;
  onAddBuilding: () => void;
  input: string;
  setInput: (input: string) => void;
  selectImage: File | null;
  setSelectImage: (selectImage: File | null) => void;
};

const AddBuildingPrompt = ({
  onBuildingOutClick,
  onAddBuilding,
  input,
  setInput,
  selectImage,
  setSelectImage,
}: Props) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
    setInput(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.log('파일이 선택되지 않았습니다.');
      return;
    }

    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    setSelectImage(file);
  };

  const onAddPicture = () => {
    inputFileRef.current?.click();
  };

  return (
    <div className='relative w-454 h-681 shadow-2xl rounded-8 flex flex-col items-center bg-white'>
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
            <BuildingSelectImageBtn image={imageUrl} onClick={onAddPicture} />
          ) : (
            <BtnLargeVariant label={'사진 추가'} disabled={false} variant={'blue'} onClick={onAddPicture} />
          )}
          <input
            id='fileInput'
            type='file'
            accept='image/*'
            style={{ display: 'none', visibility: 'hidden' }}
            ref={inputFileRef}
            onChange={handleFileChange}
          />
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
