import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { userResponseDataList } from '@/types/userManagement';
import React from 'react';

export type Props = {
  index: number;
  id: number;
  name: string;
  studentNumber: string;
  phoneNumber: string;
  bonusPoint: number;
  minusPoint: number;
  createdAt: string;
};

const AppMemberManagementListBody = ({
  index,
  id,
  name,
  studentNumber,
  phoneNumber,
  bonusPoint,
  minusPoint,
  createdAt,
}: Props) => {
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentNumber}</td>
      <td className='text-center'>{phoneNumber}</td>
      <td className='text-center'>{bonusPoint}</td>
      <td className='text-center'>{minusPoint}</td>
      <td className='text-center'>{createdAt}</td>
    </tr>
  );
};

export default AppMemberManagementListBody;
