'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { PointMemberResponseDataList } from '@/types/pointManagement';
import React from 'react';

export type Props = {
  index: number;
  data: PointMemberResponseDataList;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const PointManagementListBody = ({ index, data, isChecked, setIsChecked }: Props) => {
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{data.name}</td>
      <td className='text-center'>{data.studentNumber}</td>
      <td className='text-center'>{data.studentNumber}</td>
      <td className='text-center'>{data.bonusPoint}</td>
      <td className='text-center'>{data.minusPoint}</td>
      <td className='text-center'>{data.dormitory}</td>
      <td className='text-center'>{data.room}</td>
      <td className='h-38 flex justify-center items-center my-auto'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </tr>
  );
};

export default PointManagementListBody;
