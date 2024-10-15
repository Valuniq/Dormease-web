'use client';
import React, { useState } from 'react';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';
import { BuildingList } from '@/types/student';

type Props = {
  list: BuildingList[];
  dormitoryId: number;
  handleSelectedId: (selectedId: number) => void;
  setIsBuilding: (isBuilding: boolean) => void;
};

const RelocationDropdown = ({ list, dormitoryId, handleSelectedId, setIsBuilding }: Props) => {
  const [selectedId, setSelectedId] = useState(dormitoryId);

  return (
    <div className='flex flex-col items-center min-w-155 pb-14 rounded-8 bg-white shadow px-11'>
      <div className='mt-29 mb-9 text-center'>
        {list.map((data, index) => {
          return (
            <div key={index} className='pb-11'>
              <BtnMidVariant
                label={data.dormitoryName + '(' + data.roomSize + '인실)'}
                variant='white'
                disabled={false}
                selected={selectedId === data.dormitoryId}
                long={true}
                onClick={() => setSelectedId(data.dormitoryId)}
              />
            </div>
          );
        })}
      </div>
      <BtnMidVariant
        label='배치'
        variant='red'
        disabled={selectedId === 0 || dormitoryId === selectedId}
        long={true}
        onClick={() => {
          handleSelectedId(selectedId);
          setIsBuilding(false);
        }}
      />
    </div>
  );
};

export default RelocationDropdown;
