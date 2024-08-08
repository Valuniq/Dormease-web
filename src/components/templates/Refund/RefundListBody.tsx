import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import React from 'react';
import { formatCreateDate } from '../../organisms/FormatCreateDate/FormatCreateDate';
import { RefundListResponseDataList } from '@/types/refund';

type Props = {
  item: RefundListResponseDataList;
  isLastItem: boolean;
  clickRefund: number;
  onStudentClick: (refundRequestmentId: number) => void;
  onDeleteRefund: () => void;
};

const RefundListBody = ({ isLastItem, clickRefund, onStudentClick, onDeleteRefund, item }: Props) => {
  return (
    <div className={`flex items-center relative ${!isLastItem && 'border-b-1 border-gray-grayscale30'}`}>
      <div
        className={`my-8 flex items-center rounded-5 w-full H4-caption h-38 text-nowrap cursor-pointer ${clickRefund === item.refundRequestmentId ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => onStudentClick(item.refundRequestmentId)}
      >
        <div className='w-[6%]'>{item.residentName}</div>
        <div className='w-[10%]'>{item.studentNumber}</div>
        <div className='w-[12%]'>{item.phoneNumber}</div>
        <div className='w-[8%]'>{item.bankName}</div>
        <div className='w-[15%]'>{item.accountNumber}</div>
        <div className='w-[7%]'>{item.termName}</div>
        <div className='w-[8%]'>{formatCreateDate(item.exitDate)}</div>
        <div className='w-[8%]'>{formatCreateDate(item.createDate)}</div>
        <div className='w-[12%]'>{item.dormitoryName}</div>
        <div className='w-[7%]'>{item.roomNumber ? item.roomNumber + '호' : '-'}</div>
        <div className='w-[7%]'>{item.bedNumber ? item.bedNumber + '번' : '-'}</div>
      </div>
      <div className='absolute -right-87'>
        <BtnMiniVariant
          label='처리'
          disabled={!(clickRefund === item.refundRequestmentId)}
          selected={false}
          variant='blue'
          onClick={onDeleteRefund}
        />
      </div>
    </div>
  );
};

export default RefundListBody;
