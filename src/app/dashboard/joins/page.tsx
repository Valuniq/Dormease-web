'use client';

import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import JoinSettingInputText from '@/components/atoms/InputText/JoinSettingInputText/JoinSettingInputText';
import JoinHistoryList from '@/components/templates/Join/JoinHistory/JoinHistoryList';
import React from 'react';
import Default from '@/components/templates/Join/Default/Default';
import TicketPrice from '@/components/templates/Join/TicketPrice/TicketPrice';
import JoinDorm from '@/components/templates/Join/Detail/JoinDorm/JoinDorm';
import BuildingPrice from '@/components/templates/Join/Detail/BuildingPrice/BuildingPrice';
import { joinApplicationState, termReqIsActiveState, termReqListState } from '@/recoil/join';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [applicationData, setApplicationData] = useRecoilState(joinApplicationState);
  const [termReqList, setTermReqList] = useRecoilState(termReqListState);
  const [termReqIsActive, setIsTermReqIsActive] = useRecoilState(termReqIsActiveState);

  const updateTitle = (title: string) => {
    setApplicationData({
      ...applicationData,
      title,
    });
  };

  // 작성 완료 버튼을 활성화할 조건 확인
  // 작성 완료 버튼을 활성화할 조건 확인
  const validateFields = () => {
    const { title, startDate, endDate, depositStartDate, depositEndDate, dormitoryRoomTypeReqList } = applicationData;

    // 필수 필드가 비어있다면 false 반환
    if (!title || !startDate || !endDate || !depositStartDate || !depositEndDate) {
      return false;
    }

    // 수용 가능 인원의 각 기숙사 인실이 비어있거나 0 이하인 경우 false 반환
    for (let room of dormitoryRoomTypeReqList) {
      if (room.acceptLimit === null || room.acceptLimit <= 0) {
        return false;
      }
    }

    // termReqIsActiveState를 통해 활성화된 기간에 대해서만 값을 확인
    for (let i = 0; i < termReqList.length; i++) {
      const term = termReqList[i];

      // 활성화된 기간에 대해서만 체크 (termReqIsActiveState[i]가 true인 경우)
      if (termReqIsActive[i]) {
        for (let dorm of term.dormitoryTermReqList) {
          if (dorm.price === null || dorm.price <= 0) {
            return false; // 가격이 null이거나 0 이하일 경우 false 반환
          }
        }
      }
    }

    return true; // 모든 필드가 올바르게 입력된 경우 true 반환
  };

  // 작성 완료 버튼 클릭 시 실행되는 함수
  const handleSubmit = () => {
    if (validateFields()) {
      // 제출할 수 있는 상태라면 필요한 추가 작업을 여기서 진행
      alert('입력된 모든 필드가 유효합니다. 데이터를 제출합니다.');
      // 여기에 추가적인 제출 로직을 넣으세요
    }
  };

  return (
    <div className='flex flex-col w-[1483px]'>
      <div className='H0 text-gray-grayscale50 flex items-center justify-center mb-32'>
        <h1>입사 신청 설정</h1>
      </div>
      <div className='flex itmes-center mb-27'>
        <h2 className='H4 text-gray-grayscale40 whitespace-nowrap mr-100'>제목</h2>
        <JoinSettingInputText input={applicationData.title} setInput={updateTitle} placeholder={'제목을 입력하세요.'} />
      </div>
      {/* 입사 신청 기본 설정 */}
      <Default />
      <div className='H4 w-full h-464'>
        <div className='w-full h-48 flex items-center justify-center border-y-1 border-y-gray-grayscale30'>
          <div className='w-[285px] h-full flex items-center justify-center border-r-1 border-r-gray-grayscale30'>
            수용 가능 인원
          </div>
          <div className='w-[838px] h-full flex items-center justify-center text-center border-r-1 border-r-gray-grayscale30'>
            건물별 가격
          </div>
          <div className='w-[313px] h-full flex items-center justify-around'>
            <span>식권</span>
            <span>식권 가격</span>
          </div>
        </div>
        <div className='w-full h-415 flex overflow-y-scroll'>
          {/* 기숙사/인실/성별 별 수용 가능 인원 */}
          <div className='w-[285px] h-full flex flex-col items-center pt-34 pr-16'>
            <JoinDorm />
          </div>
          {/* 중간 divider */}
          <div className='w-1 h-full bg-gray-grayscale30 sticky top-0' />
          {/* 건물별 가격 */}
          <div className='w-[838px] h-full flex items-start justify-around p-9'>
            <BuildingPrice />
          </div>
          {/* 중간 divider */}
          <div className='w-1 h-full bg-gray-grayscale30 sticky top-0' />
          {/* 식권/식권 가격 */}
          <div className='w-[313px] px-10 h-full'>
            <TicketPrice />
          </div>
        </div>
      </div>
      <div className='mb-30'>
        <JoinHistoryList />
      </div>
      <div className='flex items-center justify-center w-full'>
        <BtnMidVariant label={'작성 완료'} disabled={!validateFields()} variant={'blue'} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Page;
