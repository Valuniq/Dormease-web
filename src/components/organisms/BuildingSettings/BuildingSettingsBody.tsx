import React from 'react';
import BuildingInBtn from '@/components/atoms/AllBtn/BuildingInBtn/BuildingInBtn';
import BuildingOutBtn from '@public/images/BuildingOutBtn.svg';
import Image from 'next/image';

type Props = {
  id: number;
  name: string;
  imageUrl: string | null;
  onBuildingOutClick: () => void;
  onBuildingSettingsDetail: (id: number) => void;
};

const BuildingSettingsBody = ({ id, name, imageUrl, onBuildingOutClick, onBuildingSettingsDetail }: Props) => {
  return (
    <div className='relative w-381 h-241 rounded-8 bg-gray-grayscale5'>
      {imageUrl !== null && (
        <Image
          className='rounded-8 cursor-pointer'
          src={imageUrl}
          alt={name}
          objectFit='fill'
          width={381}
          height={241}
          onClick={() => onBuildingSettingsDetail(id)}
        />
      )}
      <div className='absolute bottom-0'>
        <BuildingInBtn label={name} selected={false} onClick={() => onBuildingSettingsDetail(id)} />
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onBuildingOutClick();
        }}
      >
        <BuildingOutBtn className='absolute right-8 top-8' />
      </button>
    </div>
  );
};

export default BuildingSettingsBody;
