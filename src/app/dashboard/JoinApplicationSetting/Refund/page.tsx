'use client';
import React, { useEffect, useState } from 'react';
import RefundList from '@/components/organisms/Refund/RefundList';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import useSWR, { mutate } from 'swr';
import { getRefundRequestment, postPeriod } from '@/apis/refund';
import { RefundRequestmentResponseDataList } from '@/types/refund';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';

type Props = {
  clickSchoolNumber: number;
  onStudentClick: (schoolNumber: number) => void;
};

const Refund = ({ onStudentClick, clickSchoolNumber }: Props) => {
  const [refundList, setRefundList] = useState<RefundRequestmentResponseDataList[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageTotalNum, setPageTotalNum] = useState(0);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [dateModal, setDateModal] = useState(false);

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
    if (navigation === 'prev' && pageNum > 1) {
      setPageNum(pageNum - 1);
    } else if (navigation === 'next' && pageNum < pageTotalNum) {
      setPageNum(pageNum + 1);
    }
  };

  const onSaveDate = async () => {
    if (startDate && endDate) {
      try {
        const response = await postPeriod(
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0],
          'REFUND',
        );
        console.log(response.information.message);
        setDateModal(!dateModal);
      } catch (error) {
        console.error('Error posting period:', error);
      }
    }
  };

  return (
    <>
      <div className='flex flex-col w-[1396px]'>
        <div className='flex justify-between items-center mb-32'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>환불 신청</h1>
          <DatePicker
            title='환불 신청 기간'
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            handlePosting={() => setDateModal(!dateModal)}
          />
        </div>
        <RefundList list={refundList} clickSchoolNumber={clickSchoolNumber} onStudentClick={onStudentClick} />
        {refundList && (
          <div className='mt-27 flex justify-center'>
            <Pagination pageNum={pageNum} pageTotalNum={pageTotalNum} setPageNum={handlePageNum} />
          </div>
        )}
      </div>
      {dateModal && (
        <BackDrop isOpen={dateModal}>
          <ConfirmPrompt
            variant='blue'
            label='환불 신청 기간을 게시하시겠습니까?'
            onConfirm={onSaveDate}
            onCancel={() => setDateModal(!dateModal)}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Refund;
