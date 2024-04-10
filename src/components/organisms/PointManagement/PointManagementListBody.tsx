import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

type Props = {
  index: number;
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
    <>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale30'>{index}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{name}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{studentId}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{phoneNumber}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{plus}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{minus}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{building}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{room}</h1>
      </td>
      <td>
        <div className='ml-28'>
          <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
      </td>
    </>
  );
};

export default PointManagementListBody;
