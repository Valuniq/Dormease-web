import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

export type Props = {
  index: string;
  name: string;
  studentId: string;
  phoneNumber: string;
  personalAgree: boolean;
  thirdAgree: boolean;
  plus: string;
  minus: string;
  creationDate: string;
};

const AppMemberManagementListBody = ({
  index,
  name,
  studentId,
  phoneNumber,
  personalAgree,
  thirdAgree,
  plus,
  minus,
  creationDate,
}: Props) => {
  return (
    <>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{index}</h1>
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
        <h1 className='H4-caption text-gray-grayscale50'>{personalAgree ? 'O' : 'X'}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{thirdAgree ? 'O' : 'X'}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{plus}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{minus}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4-caption text-gray-grayscale50'>{creationDate}</h1>
      </td>
    </>
  );
};

export default AppMemberManagementListBody;
