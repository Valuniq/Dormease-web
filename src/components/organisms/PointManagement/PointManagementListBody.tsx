import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

export type Props = {
  index: string;
  name: string;
  studentId: string;
  phoneNumber: string;
  plus: string;
  minus: string;
  building: string;
  room: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const PointManagementListBody = ({
  index,
  name,
  studentId,
  phoneNumber,
  plus,
  minus,
  building,
  room,
  isChecked,
  setIsChecked,
}: Props) => {
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{phoneNumber}</td>
      <td className='text-center'>{plus}</td>
      <td className='text-center'>{minus}</td>
      <td className='text-center'>{building}</td>
      <td className='text-center'>{room}</td>
      <td className='flex justify-center'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </tr>
  );
};

export default PointManagementListBody;
