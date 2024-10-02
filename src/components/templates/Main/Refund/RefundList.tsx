import React from 'react';

type Props = {
  name: string;
  studentId: string;
  dormName: string;
  roomNumber: number;
  date: string;
};

const RefundList = ({ name, studentId, dormName, date, roomNumber }: Props) => {
  return (
    <div className='w-473 caption-0 text-gray-grayscale40 flex items-center p-8 text-center'>
      <div className='flex-1'> {name}</div>
      <div className='flex-1'> {studentId}</div>
      <div className='flex-1'>
        {dormName}/{roomNumber}{' '}
      </div>
      <div className='flex-1'>{date}</div>
    </div>
  );
};

export default RefundList;
