import AddBuildingBtn from '@/components/atoms/AllBtn/AddBuildingBtn/AddBuildingBtn';
import BuildingSettingsBody from '@/components/organisms/BuildingSettings/BuildingSettingsBody';
import { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  list: {
    buildingId: number;
    buildingName: string;
    image: StaticImageData;
  }[];
  onAddBuilding: () => void;
  onBuildingOutClick: () => void;
  onBuildingSettingsDetail: (buildingId: number) => void;
};

const BuildingSettings = ({ list, onAddBuilding, onBuildingOutClick, onBuildingSettingsDetail }: Props) => {
  return (
    <div className='flex flex-col w-[1200px]'>
      <h1 className='H0 text-gray-grayscale50 text-center mb-35'>건물 설정</h1>
      <div className='w-[1250px] grid grid-cols-3 gap-30 max-h-790 overflow-y-auto scrollbar-table'>
        {list &&
          list.map((data) => {
            return (
              <BuildingSettingsBody
                key={data.buildingId}
                buildingId={data.buildingId}
                buildingName={data.buildingName}
                image={data.image}
                onBuildingOutClick={onBuildingOutClick}
                onBuildingSettingsDetail={onBuildingSettingsDetail}
              />
            );
          })}
        <AddBuildingBtn onClick={onAddBuilding} />
      </div>
    </div>
  );
};

export default BuildingSettings;
