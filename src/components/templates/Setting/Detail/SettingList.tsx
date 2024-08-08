import React from 'react';
import BuildingSettingsListBody from './SettingListBody';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { DormSettingDetailRoomResponseInformation } from '@/types/setting';

type Props = {
  checkedItems: number[];
  handleCheckboxChange: (id: number) => void;
  list: DormSettingDetailRoomResponseInformation[];
};

const SettingList = ({ checkedItems, handleCheckboxChange, list }: Props) => {
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
              <Checkbox
                isChecked={list.length > 0 && checkedItems.length === list.length}
                setIsChecked={(isChecked) => {
                  if (isChecked) {
                    list.forEach((item) => {
                      if (!checkedItems.includes(item.id)) {
                        handleCheckboxChange(item.id);
                      }
                    });
                  } else {
                    list.forEach((item) => {
                      if (checkedItems.includes(item.id)) {
                        handleCheckboxChange(item.id);
                      }
                    });
                  }
                }}
              />
            </div>
          </th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tbody className='block w-[931px] h-540 overflow-y-auto scrollbar-table'>
        <tr className='h-10' />
        {list.map((data, index) => {
          return (
            <BuildingSettingsListBody
              key={index}
              isChecked={checkedItems.includes(data.id)}
              handleCheckboxChange={handleCheckboxChange}
              item={data}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SettingList;
