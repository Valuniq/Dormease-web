import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

export type Props = {
  index: string;
  name: string;
  studentId: string;
  phoneNumber: string;
  plus: string;
  minus: string;
  creationDate: string;
};

const AppMemberManagementListBody = ({ index, name, studentId, phoneNumber, plus, minus, creationDate }: Props) => {
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{phoneNumber}</td>
      <td className='text-center'>{plus}</td>
      <td className='text-center'>{minus}</td>
      <td className='text-center'>{creationDate}</td>
    </tr>
  );
};

export default AppMemberManagementListBody;
