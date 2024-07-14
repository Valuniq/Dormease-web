'use client';

import { useRequestDetail } from '@/apis/Request';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { requestIdState } from '@/recoil/request';
import { RequestDetailResponseInformation } from '@/types/request';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const Page = () => {
  const requestId = useRecoilValue(requestIdState);
  const { data, error, isLoading } = useRequestDetail(requestId);
  const [detailData, setDetailData] = useState<RequestDetailResponseInformation>({
    requestmentId: 0,
    myRequestment: false,
    title: '',
    content: '',
    writer: '',
    createdDate: '',
    consentDuringAbsence: false,
    visibility: false,
    progression: 'IN_REVIEW',
  });
  const [progressionModal, setProgressionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    if (data && data.information) {
      setDetailData(data.information);
    }
  }, [data]);

  return (
    <>
      {detailData && (
        <div className='flex flex-col w-[1200px]'>
          <h1 className='text-left H0 text-gray-grayscale50 text-nowrap'>요청사항</h1>
          <hr className='text-gray-grayscale50 mt-25' />
          <h4 className='pl-12 pt-21 pb-17 H4 text-gray-grayscale50'>{detailData.title}</h4>
          <hr className='text-gray-grayscale30' />
          <div className='flex justify-between'>
            <div className='flex items-center text-gray-grayscale50'>
              <h5 className='pl-12 pr-39 pt-13 pb-13 H4'>작성자</h5>
              <h5 className='H4-caption'>{detailData.writer}</h5>
            </div>
            <div className='flex items-center caption2 text-gray-grayscale40'>
              <h6 className='pr-19'>작성일</h6>
              <h6>{detailData.createdDate}</h6>
            </div>
          </div>
          <hr className='text-gray-grayscale30 mb-23' />
          <div className='w-full h-450 overflow-auto scrollbar-table border border-gray-grayscale30 rounded-8 px-17 py-16'>
            {detailData.content}
          </div>
          <hr className='text-gray-grayscale30 my-23' />
          <div className='flex items-center'>
            <h4 className='H4 text-gray-grayscale50 pl-12 mr-32'>부재 시 방문동의 여부</h4>
            <h3 className={`H3 w-155 ${detailData.consentDuringAbsence ? 'text-blue-blue30' : 'text-red-red20'}`}>
              {detailData.consentDuringAbsence ? '동의' : '비동의'}
            </h3>
            <h4 className='H4 text-gray-grayscale50 mr-32'>공개 여부</h4>
            <h3 className={`H3 ${detailData.visibility ? 'text-blue-blue30' : 'text-red-red20'}`}>
              {detailData.visibility ? '동의' : '비동의'}
            </h3>
          </div>
          <div className='flex justify-center gap-181 mt-24 mb-45'>
            <RadioBtn
              isOn={detailData.progression === 'IN_REVIEW'}
              setIsOn={() => setDetailData((prev) => ({ ...prev, progression: 'IN_REVIEW' }))}
              label='검토중'
            />
            <RadioBtn
              isOn={detailData.progression === 'IN_PROGRESS'}
              setIsOn={() => setDetailData((prev) => ({ ...prev, progression: 'IN_PROGRESS' }))}
              label='진행중'
            />
            <RadioBtn
              isOn={detailData.progression === 'ANSWER_COMPLETED'}
              setIsOn={() => setDetailData((prev) => ({ ...prev, progression: 'ANSWER_COMPLETED' }))}
              label='완료됨'
            />
          </div>
          <div className='flex justify-center gap-24'>
            <BtnMidVariant
              label='등록'
              disabled={data?.information.progression === detailData.progression}
              variant='blue'
              onClick={() => setProgressionModal(!progressionModal)}
            />
            <BtnMidVariant label='삭제' disabled={false} variant='red' onClick={() => setDeleteModal(!deleteModal)} />
          </div>
        </div>
      )}
      {progressionModal && (
        <BackDrop isOpen={progressionModal}>
          <ConfirmPrompt
            variant='blue'
            label='진행사항을 변경하시겠습니까?'
            onCancel={() => {
              setProgressionModal(!progressionModal);
            }}
            onConfirm={() => {
              setProgressionModal(!progressionModal);
            }}
          />
        </BackDrop>
      )}
      {deleteModal && (
        <BackDrop isOpen={deleteModal}>
          <ConfirmPrompt
            variant='red'
            label='이 글을 삭제하시겠습니까?\n삭제된 후에는 복구할 수 없습니다.'
            onCancel={() => {
              setDeleteModal(!deleteModal);
            }}
            onConfirm={() => {
              setDeleteModal(!deleteModal);
            }}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Page;
