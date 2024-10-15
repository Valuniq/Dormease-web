'use client';
import React, { useState } from 'react';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  list: string[];
  select: string;
  setSelect: (selectData: string) => void;
  setIsBuilding: (isBuilding: boolean) => void;
};

const RelocationDropdown = ({ list, select, setSelect, setIsBuilding }: Props) => {
  const [selectData, setSelectData] = useState(select);

  return (
    <div className='flex flex-col items-center w-155 pb-14 rounded-8 bg-white shadow'>
      <div className='mt-29 mb-9 text-center'>
        {list.map((data, index) => {
          return (
            <div key={index} className='pb-11'>
              <BtnMidVariant
                label={data}
                variant='white'
                disabled={false}
                selected={selectData === data}
                onClick={() => setSelectData(data)}
              />
            </div>
          );
        })}
      </div>
      <BtnMidVariant
        label='배치'
        variant='red'
        disabled={selectData === '' || select === selectData}
        onClick={() => {
          setSelect(selectData);
          setIsBuilding(false);
        }}
      />
    </div>
  );
};

export default RelocationDropdown;
