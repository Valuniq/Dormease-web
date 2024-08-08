import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { DormSettingDetailRoomResponseInformation } from '@/types/setting';
import React from 'react';

type Props = {
  isChecked: boolean;
  handleCheckboxChange: (id: number) => void;
  item: DormSettingDetailRoomResponseInformation;
};

const SettingListBody = ({ isChecked, handleCheckboxChange, item }: Props) => {
  return (
    <>
      <tr
        className={`table rounded-5 w-[917px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${isChecked ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
      >
        <td className='w-[10%]'>{item.roomNumber}</td>
        <td className='w-[25%]'>{item.roomSize === null ? '-' : item.roomSize + '인실'}</td>
        <td className='w-[20%]'>{item.gender === 'MALE' ? '남' : item.gender === 'FEMALE' ? '여' : '-'}</td>
        <td className='w-[35%]'>{item.hasKey === true ? '수령' : item.hasKey === false ? '미수령' : '-'}</td>
        <td className='w-[10%]'>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={() => handleCheckboxChange(item.id)} />
          </div>
        </td>
      </tr>
      <tr className='h-10' />
    </>
  );
};

export default SettingListBody;
