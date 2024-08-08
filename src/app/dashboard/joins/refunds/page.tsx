'use client';
import React, { useEffect, useState } from 'react';
import RefundList from '@/components/templates/Refund/RefundList';
import Pagination from '@/components/atoms/AllBtn/Pagination/Pagination';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import { useRefundList, deleteRefundList } from '@/apis/refund';
import { RefundListResponseDataList } from '@/types/refund';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { mutate } from 'swr';
import { BASE_URL } from '@/constants/path';
import { postPeriod, usePeriod } from '@/apis/period';

const Page = () => {
  const [refundList, setRefundList] = useState<RefundListResponseDataList[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageTotalNum, setPageTotalNum] = useState(0);
  const { data, error, isLoading } = usePeriod('REFUND');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [dateModal, setDateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [clickRefund, setClickRefund] = useState(0);

  const { data: refundData, error: refundError, isLoading: refundLoading } = useRefundList(pageNum);

  useEffect(() => {
    if (data?.information.startDate) {
      setStartDate(new Date(data.information.startDate));
    }
    if (data?.information.endDate) {
      setEndDate(new Date(data.information.endDate));
    }
  }, [data]);

  useEffect(() => {
    if (refundData) {
      setRefundList(refundData.information.dataList);
      setPageTotalNum(refundData.information.pageInfo.totalPage);
    } else {
      console.log(refundError);
    }
  }, [refundData, refundError]);

  //페이지네이션
  const handlePageNum = (navigation: 'prev' | 'next') => {
    if (navigation === 'prev' && pageNum > 1) {
      setPageNum(pageNum - 1);
    } else if (navigation === 'next' && pageNum < pageTotalNum) {
      setPageNum(pageNum + 1);
    }
  };

  //기간 설정 저장
  const onSaveDate = async () => {
    if (startDate && endDate) {
      try {
        const response = await postPeriod(
          startDate.toISOString().split('T')[0],
          endDate.toISOString().split('T')[0],
          'REFUND',
        );
        if (response.check) {
          setDateModal(!dateModal);
        }
      } catch (error) {
        console.error('Error posting period:', error);
      }
    }
  };

  //환불 신청 처리
  const onDeleteRefund = async () => {
    const response = await deleteRefundList(clickRefund);
    if (response.check) {
      setDeleteModal(!deleteModal);
      mutate(`${BASE_URL}/api/v1/web/refundRequestment?page=${pageNum}`);
    }
  };

  return (
    <>
      <div className='flex flex-col w-[1396px]'>
        <div className='flex justify-between items-center mb-32 w-[1396px]'>
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
          clickRefund={clickRefund}
          onStudentClick={(refundRequestmentId) => {
            setClickRefund(refundRequestmentId);
          }}
          onDeleteRefund={() => setDeleteModal(!deleteModal)}
        />
        {refundList && refundList.length > 0 && (
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

export default Page;
