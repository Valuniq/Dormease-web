import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import React from 'react';
import { formatCreateDate } from '../FormatCreateDate/FormatCreateDate';

type Props = {
  isLastItem: boolean;
  clickRefund: number;
  onStudentClick: (refundRequestmentId: number) => void;
  onDeleteRefund: () => void;

  refundRequestmentId: number;
  residentName: string;
  studentNumber: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
  termName: string;
  exitDate: string;
  createDate: string;
  dormitoryName: string;
  roomNumber: number;
  bedNumber: number;
};

const RefundListBody = ({
  isLastItem,
  clickRefund,
  onStudentClick,
  onDeleteRefund,
  refundRequestmentId,
  residentName,
  studentNumber,
  phoneNumber,
  bankName,
  accountNumber,
  termName,
  exitDate,
  createDate,
  dormitoryName,
  roomNumber,
  bedNumber,
}: Props) => {
  return (
    <div className={`flex items-center relative ${!isLastItem && 'border-b-1 border-gray-grayscale30'}`}>
      <div
        className={`my-8 flex items-center rounded-5 w-full H4-caption h-38 text-nowrap cursor-pointer ${clickRefund === refundRequestmentId ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => onStudentClick(refundRequestmentId)}
      >
        <div className='w-[6%]'>{residentName}</div>
        <div className='w-[10%]'>{studentNumber}</div>
        <div className='w-[12%]'>{phoneNumber}</div>
        <div className='w-[8%]'>{bankName}</div>
        <div className='w-[15%]'>{accountNumber}</div>
        <div className='w-[7%]'>{termName}</div>
        <div className='w-[8%]'>{formatCreateDate(exitDate)}</div>
        <div className='w-[8%]'>{formatCreateDate(createDate)}</div>
        <div className='w-[12%]'>{dormitoryName}</div>
        <div className='w-[7%]'>{roomNumber ? roomNumber + '호' : '-'}</div>
        <div className='w-[7%]'>{bedNumber ? bedNumber + '번' : '-'}</div>
      </div>
      <div className='absolute -right-87'>
        <BtnMiniVariant
          label='처리'
          disabled={!(clickRefund === refundRequestmentId)}
          selected={false}
          variant='blue'
          onClick={onDeleteRefund}
        />
      </div>
    </div>
  );
};

export default RefundListBody;
