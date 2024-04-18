import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import React from 'react';

type Props = {
  isLastItem: boolean;
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
  period: string;
  exitDate: string;
  applicationDate: string;
  building: string;
  room: string;
  bedNumber: string;
  clickSchoolNumber: string;
  onStudentClick: (schoolNumber: string) => void;
};

const RefundListBody = ({
  isLastItem,
  name,
  schoolNumber,
  phoneNumber,
  bankName,
  accountNumber,
  period,
  exitDate,
  applicationDate,
  building,
  room,
  bedNumber,
  clickSchoolNumber,
  onStudentClick,
}: Props) => {
  return (
    <div className={`flex items-center relative ${!isLastItem && 'border-b-1 border-gray-grayscale30'}`}>
      <div
        className={`my-8 flex items-center rounded-5 w-full H4-caption h-38 text-nowrap cursor-pointer ${clickSchoolNumber === schoolNumber ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => onStudentClick(schoolNumber)}
      >
        <div className='w-[6%]'>{name}</div>
        <div className='w-[10%]'>{schoolNumber}</div>
        <div className='w-[12%]'>{phoneNumber}</div>
        <div className='w-[8%]'>{bankName}</div>
        <div className='w-[12%]'>{accountNumber}</div>
        <div className='w-[8%]'>{period}</div>
        <div className='w-[9%]'>{exitDate}</div>
        <div className='w-[9%]'>{applicationDate}</div>
        <div className='w-[12%]'>{building}</div>
        <div className='w-[7%]'>{room}</div>
        <div className='w-[7%]'>{bedNumber}</div>
      </div>
      <div className='absolute -right-87'>
        <BtnMiniVariant label='처리' disabled={!(clickSchoolNumber === schoolNumber)} selected={false} variant='blue' />
      </div>
    </div>
  );
};

export default RefundListBody;
