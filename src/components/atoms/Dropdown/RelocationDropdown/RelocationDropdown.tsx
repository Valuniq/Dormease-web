'use client';
import React, { useState } from 'react';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';
import { BuildingList } from '@/types/student';

type Props = {
  list: BuildingList[];
  dormInfo: BuildingList;
  handleSelectedDorm: (selectedDorm: BuildingList) => void;
  setIsBuilding: (isBuilding: boolean) => void;
};

const RelocationDropdown = ({ list, dormInfo, handleSelectedDorm, setIsBuilding }: Props) => {
  const [selectedDorm, setSelectedDorm] = useState<BuildingList>(dormInfo);

  return (
    <div className='flex flex-col items-center min-w-155 pb-14 rounded-8 bg-white shadow px-11'>
      <div className='mt-29 mb-9 text-center'>
        {list.map((data, index) => {
          const isSelected =
            selectedDorm.dormitoryId === data.dormitoryId &&
            selectedDorm.dormitoryName === data.dormitoryName &&
            selectedDorm.roomSize === data.roomSize;

          return (
            <div key={index} className='pb-11'>
              <BtnMidVariant
                label={`${data.dormitoryName}${data.roomSize !== 0 && `(${data.roomSize}인실)`}`}
                variant='white'
                disabled={false}
                selected={isSelected}
                long={true}
                onClick={() =>
                  setSelectedDorm({
                    dormitoryId: data.dormitoryId,
                    dormitoryName: data.dormitoryName,
                    roomSize: data.roomSize,
                  })
                }
              />
            </div>
          );
        })}
      </div>
      <BtnMidVariant
        label='배치'
        variant='red'
        disabled={
          selectedDorm.dormitoryId === 0 ||
          (selectedDorm.dormitoryId === dormInfo.dormitoryId &&
            selectedDorm.dormitoryName === dormInfo.dormitoryName &&
            selectedDorm.roomSize === dormInfo.roomSize)
        }
        long={true}
        onClick={() => {
          handleSelectedDorm(selectedDorm);
          setIsBuilding(false);
        }}
      />
    </div>
  );
};

export default RelocationDropdown;
