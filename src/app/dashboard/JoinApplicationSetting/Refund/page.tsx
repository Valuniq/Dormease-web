'use client';
import React, { useEffect, useState } from 'react';
import RefundList from '@/components/organisms/Refund/RefundList';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import useSWR, { mutate } from 'swr';
import { getRefundRequestment } from '@/apis/refund';
import { RefundRequestmentResponseDataList } from '@/types/refund';

type Props = {
  clickSchoolNumber: number;
  onStudentClick: (schoolNumber: number) => void;
};

const Refund = ({ onStudentClick, clickSchoolNumber }: Props) => {
  const [refundList, setRefundList] = useState<RefundRequestmentResponseDataList[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageTotalNum, setPageTotalNum] = useState(0);

  const { data, error } = useSWR(`/api/v1/web/refundRequestment/residents?page=${pageNum}`, getRefundRequestment);

  useEffect(() => {
    if (data) {
      setRefundList(data.information.dataList);
      setPageTotalNum(data.information.pageInfo.totalPage);
    } else {
      console.log(error);
    }
  }, [data, error]);

  const handlePageNum = (navigation: 'prev' | 'next') => {
    if (navigation === 'prev') {
      setPageNum(pageNum - 1);
    } else {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <div className='flex flex-col w-[1396px]'>
      <div className='flex justify-between items-center mb-32'>
        <h1 className='H0 text-gray-grayscale50 text-nowrap'>환불 신청</h1>
        <DatePicker
          title='환불 신청 기간'
          startDate={undefined}
          endDate={undefined}
          setStartDate={function (startDate: Date): void {
            throw new Error('Function not implemented.');
          }}
          setEndDate={function (endDate: Date): void {
            throw new Error('Function not implemented.');
          }}
          handlePosting={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <RefundList list={refundList} clickSchoolNumber={clickSchoolNumber} onStudentClick={onStudentClick} />
      {refundList && (
        <div className='mt-27 flex justify-center'>
          <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={handlePageNum} />
        </div>
      )}
    </div>
  );
};

export default Refund;
