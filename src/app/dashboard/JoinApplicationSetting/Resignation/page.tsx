'use client';
import React, { useState } from 'react';
import ResignationList from '@/components/organisms/Resignation/ResignationList';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import { patchResignation, useResignationList } from '@/apis/Resignation';
import InfiniteScroll from '@/hooks/useInfiniteScroll';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';

const Resignation = () => {
  const {
    resignationData,
    error: withdrawalError,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    mutate: mutateList,
  } = useResignationList();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [unableModal, setUnableModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id) ? prevCheckedItems.filter((item) => item !== id) : [...prevCheckedItems, id],
    );
  };

  const onPatchSecurityDeposit = async (status: 'PAYMENT' | 'UNALBE') => {
    const response = await patchResignation(status, checkedItems);
    if (response.check) {
      await mutateList();
      setCheckedItems([]);
      if (status === 'PAYMENT') {
        setPaymentModal(false);
      } else if (status === 'UNALBE') {
        setUnableModal(false);
      }
    }
  };

  return (
    <>
      <div className='flex flex-col w-[1200px]'>
        <div className='flex justify-between items-center mb-32'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>퇴사 확인서 제출 명단</h1>
          <div className='flex gap-38 items-end'>
            <DatePicker
              title='제출 기간'
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
        </div>
        <InfiniteScroll
          isLoading={isLoadingMore || false}
          isReachingEnd={isReachingEnd}
          loadMore={() => {
            setSize(size + 1);
          }}
        >
          <ResignationList
            list={resignationData}
            checkedItems={checkedItems}
            handleCheckboxChange={handleCheckboxChange}
          />
        </InfiniteScroll>
        <div className='mt-21 flex justify-end gap-14'>
          <BtnMidVariant
            label='지급불가'
            disabled={checkedItems.length === 0}
            variant='red'
            onClick={() => setUnableModal(!unableModal)}
          />
          <BtnMidVariant
            label='지급하기'
            disabled={checkedItems.length === 0}
            variant='blue'
            onClick={() => setPaymentModal(!paymentModal)}
          />
        </div>
      </div>
      {unableModal && (
        <BackDrop isOpen={unableModal}>
          <ConfirmPrompt
            variant='red'
            label='선택한 인원에 대한 보증금 지급을\n불가로 설정하시겠습니까?'
            onConfirm={() => onPatchSecurityDeposit('UNALBE')}
            onCancel={() => setUnableModal(!unableModal)}
          />
        </BackDrop>
      )}
      {paymentModal && (
        <BackDrop isOpen={paymentModal}>
          <ConfirmPrompt
            variant='blue'
            label='선택한 인원에 대해 보증금을 환급 처리하시겠습니까?'
            onConfirm={() => onPatchSecurityDeposit('PAYMENT')}
            onCancel={() => setPaymentModal(!paymentModal)}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Resignation;
