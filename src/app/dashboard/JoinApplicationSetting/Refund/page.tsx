'use client';
import React, { useEffect, useState } from 'react';
import RefundList from '@/components/organisms/Refund/RefundList';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import { useRefundRequestment, postPeriod, deleteRefundRequestment } from '@/apis/refund';
import { RefundRequestmentResponseDataList } from '@/types/refund';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';

const Refund = () => {
  const [refundList, setRefundList] = useState<RefundRequestmentResponseDataList[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageTotalNum, setPageTotalNum] = useState(0);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [dateModal, setDateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [clickRefund, setClickRefund] = useState(0);

  const { data: refundData, error: refundError, isLoading: refundLoading } = useRefundRequestment(pageNum);

  useEffect(() => {
    if (refundData) {
      setRefundList(refundData.information.dataList);
      setPageTotalNum(refundData.information.pageInfo.totalPage);
    } else {
      console.log(refundError);
    }
  }, [refundData, refundError]);

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

  const onDeleteRefund = async () => {
    const response = await deleteRefundRequestment(clickRefund);
    console.log(response);
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
        <RefundList
          list={refundList}
          clickSchoolNumber={clickRefund}
          onStudentClick={(studentNumber) => {
            setClickRefund(studentNumber);
          }}
          onDeleteRefund={() => setDeleteModal(!deleteModal)}
        />
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
      {deleteModal && (
        <BackDrop isOpen={deleteModal}>
          <ConfirmPrompt
            variant='blue'
            label='선택한 인원에 대해 환불을 진행하겠습니까?'
            onConfirm={onDeleteRefund}
            onCancel={() => setDeleteModal(!deleteModal)}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Refund;
