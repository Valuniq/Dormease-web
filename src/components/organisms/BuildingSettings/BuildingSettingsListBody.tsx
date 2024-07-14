import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { BuildingSettingDetailRoomResponseInformation } from '@/types/building';
import React from 'react';

type Props = BuildingSettingDetailRoomResponseInformation & {
  isChecked: boolean;
  handleCheckboxChange: (id: number) => void;
};

const BuildingSettingsListBody = ({
  id,
  roomNumber,
  roomSize,
  gender,
  hasKey,
  isChecked,
  handleCheckboxChange,
}: Props) => {
  return (
    <>
      <tr
        className={`table rounded-5 w-[917px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${isChecked ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
      >
        <td className='w-[10%]'>{roomNumber}</td>
        <td className='w-[25%]'>{roomSize === null ? '-' : roomSize + '인실'}</td>
        <td className='w-[20%]'>{gender === 'MALE' ? '남' : gender === 'FEMALE' ? '여' : '-'}</td>
        <td className='w-[35%]'>{hasKey === true ? '수령' : hasKey === false ? '미수령' : '-'}</td>
        <td className='w-[10%]'>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={() => handleCheckboxChange(id)} />
          </div>
        </td>
      </tr>
      <tr className='h-10' />
    </>
  );
};

export default BuildingSettingsListBody;
