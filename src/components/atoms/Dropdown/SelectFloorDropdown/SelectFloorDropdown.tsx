import React from 'react';
import Dropdown from '@public/images/Dropdown.svg';
import FloorBtn from '../../AllBtn/FloorBtn/FloorBtn';
import { BuildingManagementFloorResponseInformation } from '@/types/dorm';

type Props = {
  list: BuildingManagementFloorResponseInformation[];
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
  select: number;
  setSelect: (floor: number) => void;
};

const SelectFloorDropdown = ({
  list,
  isOn,
  setIsOn,
  select,
  setSelect,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='flex flex-col items-center'>
      <button
        {...props}
        onClick={() => {
          if (list.length > 0) {
            setIsOn(!isOn);
          }
        }}
        className='H4 flex justify-center items-center w-75 h-41 rounded-5 bg-gray-grayscale5'
      >
        {select === 0 ? '층' : select === 999 ? '전체' : select + '층'}
        <Dropdown className={`${isOn && 'rotate-180'} ml-10`} />
      </button>
      {list.length > 0 && isOn && (
        <div className='mt-12 py-3 w-75 rounded-5 bg-gray-grayscale5 text-center'>
          {list.map((data, index) => {
            return (
              <div key={index} className='pt-3 pb-3'>
                <FloorBtn
                  label={data.floor === 999 ? '전체' : data.floor + '층'}
                  disabled={false}
                  selected={select === data.floor}
                  onClick={() => {
                    setSelect(data.floor);
                    setIsOn(!isOn);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectFloorDropdown;
