import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

type Props = {
  roomId: number;
  roomNumber: number;
  roomSize: number | null;
  gender: 'MALE' | 'FEMALE';
  hasKey: boolean | null;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  listClick: number;
  onListClick: (roomId: number) => void;
};

const BuildingSettingsListBody = ({
  roomId,
  roomNumber,
  roomSize,
  gender,
  hasKey,
  isChecked,
  setIsChecked,
  listClick,
  onListClick,
}: Props) => {
  return (
    <>
      <tr
        className={`table rounded-5 w-[917px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${listClick === roomId ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => onListClick(roomId)}
      >
        <td className='w-[10%]'>{roomNumber}</td>
        <td className='w-[25%]'>{roomSize === null ? '-' : roomSize + '인실'}</td>
        <td className='w-[20%]'>{gender === 'MALE' ? '남' : gender === 'FEMALE' ? '여' : '-'}</td>
        <td className='w-[35%]'>{hasKey === true ? '수령' : hasKey === false ? '미수령' : '-'}</td>
        <td className='w-[10%]'>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
        </td>
      </tr>
      <tr className='h-10' />
    </>
  );
};

export default BuildingSettingsListBody;
