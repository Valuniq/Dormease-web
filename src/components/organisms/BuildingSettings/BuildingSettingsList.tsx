import React from 'react';
import BuildingSettingsListBody from './BuildingSettingsListBody';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';

type Props = {
  listClick: number;
  onListClick: (roomId: number) => void;
  setIsChecked: (isChecked: boolean) => void;
  isAllChecked: boolean;
  setIsAllChecked: (isChecked: boolean) => void;
  list: {
    roomId: number;
    roomNumber: number;
    roomSize: number | null;
    gender: 'MALE' | 'FEMALE';
    hasKey: boolean | null;
    isChecked: boolean;
  }[];
};

const BuildingSettingsList = ({ list, listClick, onListClick, setIsChecked, isAllChecked, setIsAllChecked }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[917px]'>
        <tr>
          <th className='H4 w-[10%]'>호 실</th>
          <th className='H4 w-[25%]'>인 실</th>
          <th className='H4 w-[20%]'>성 별</th>
          <th className='H4 w-[35%]'>열쇠 수령 여부</th>
          <th className='H4 w-[10%]'>
            <div className='flex items-center justify-center text-center w-full gap-6'>
              전 체
              <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
            </div>
          </th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tbody className='block w-[931px] h-677 overflow-y-auto scrollbar-table'>
        <tr className='h-10' />
        {list.map((data, index) => {
          return (
            <BuildingSettingsListBody
              key={index}
              roomId={data.roomId}
              roomNumber={data.roomNumber}
              roomSize={data.roomSize}
              gender={data.gender}
              hasKey={data.hasKey}
              isChecked={data.isChecked}
              setIsChecked={setIsChecked}
              listClick={listClick}
              onListClick={onListClick}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default BuildingSettingsList;
