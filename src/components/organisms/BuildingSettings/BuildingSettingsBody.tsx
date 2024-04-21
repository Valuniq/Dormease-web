import React from 'react';
import BuildingInBtn from '@/components/atoms/AllBtn/BuildingInBtn/BuildingInBtn';
import BuildingOutBtn from '@public/images/BuildingOutBtn.svg';
import Image, { StaticImageData } from 'next/image';

type Props = {
  buildingId: number;
  buildingName: string;
  image: StaticImageData;
  onBuildingOutClick: () => void;
  onBuildingSettingsDetail: (buildingId: number) => void;
};

const BuildingSettingsBody = ({
  buildingId,
  buildingName,
  image,
  onBuildingOutClick,
  onBuildingSettingsDetail,
}: Props) => {
  return (
    <div className='relative w-381 h-241 rounded-8 bg-gray-grayscale5'>
      <Image
        className='rounded-8 cursor-pointer'
        src={image}
        alt='Building'
        objectFit='fill'
        onClick={() => onBuildingSettingsDetail(buildingId)}
      />
      <div className='absolute bottom-0'>
        <BuildingInBtn label={buildingName} selected={false} onClick={() => onBuildingSettingsDetail(buildingId)} />
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onBuildingOutClick;
        }}
      >
        <BuildingOutBtn className='absolute right-8 top-8' />
      </button>
    </div>
  );
};

export default BuildingSettingsBody;
