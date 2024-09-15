import React from 'react';
import BuildingSettingsListBody from './SettingListBody';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { DormSettingDetailRoomResponseInformation } from '@/types/setting';

type Props = {
  checkedItems: number[];
  handleCheckboxChange: (roomNumber: number) => void;
  list: DormSettingDetailRoomResponseInformation[];
  isEdit: boolean;
};

const SettingList = ({ checkedItems, handleCheckboxChange, list, isEdit }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[917px]'>
        <tr>
          <th className='H4 w-[10%]'>호 실</th>
          <th className={`H4 ${isEdit ? 'w-[19%]' : 'w-[27%]'}`}>인 실</th>
          <th className={`H4 ${isEdit ? 'w-[17%]' : 'w-[18%]'}`}>성 별</th>
          <th className={`H4 ${isEdit ? 'w-[22%]' : 'w-[35%]'}`}>열쇠 수령 여부</th>
          <th className={`H4 ${isEdit ? 'w-[22%]' : 'w-[10%]'}`}>활성화</th>
          {isEdit && (
            <th className='H4 w-[10%]'>
              <div className='flex items-center justify-center text-center w-full gap-6'>
                전 체
                <Checkbox
                  isChecked={list.length > 0 && checkedItems.length === list.length}
                  setIsChecked={(isChecked) => {
                    if (isChecked) {
                      list.forEach((item) => {
                        if (!checkedItems.includes(item.roomNumber)) {
                          handleCheckboxChange(item.roomNumber);
                        }
                      });
                    } else {
                      list.forEach((item) => {
                        if (checkedItems.includes(item.roomNumber)) {
                          handleCheckboxChange(item.roomNumber);
                        }
                      });
                    }
                  }}
                />
              </div>
            </th>
          )}
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tbody className={`block w-[931px] overflow-y-auto scrollbar-table ${isEdit ? 'h-540' : 'h-690'}`}>
        <tr className='h-10' />
        {list.map((data, index) => {
          return (
            <BuildingSettingsListBody
              key={index}
              isChecked={checkedItems.includes(data.roomNumber)}
              handleCheckboxChange={handleCheckboxChange}
              item={data}
              isEdit={isEdit}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SettingList;
