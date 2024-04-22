import React from 'react';
import RefundList from '@/components/organisms/Refund/RefundList';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';

type Props = {
  clickSchoolNumber: string;
  onStudentClick: (schoolNumber: string) => void;
  pageNum: number;
  pageTotalNum: number;
  setPageNum: (navigation: 'prev' | 'next') => void;
  list: {
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
  }[];
};

const Refund = ({ list, onStudentClick, clickSchoolNumber, pageNum, pageTotalNum, setPageNum }: Props) => {
  return (
    <div className='flex flex-col w-[1396px]'>
      <div className='flex justify-between items-center mb-32'>
        <h1 className='H0 text-gray-grayscale50 text-nowrap'>환불 신청</h1>
        <div></div>
      </div>
      <RefundList list={list} clickSchoolNumber={clickSchoolNumber} onStudentClick={onStudentClick} />
      <div className='mt-27 flex justify-center'>
        <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={setPageNum} />
      </div>
    </div>
  );
};

export default Refund;
