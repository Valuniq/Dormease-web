'use client';

import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import JoinSettingInputText from '@/components/atoms/InputText/JoinSettingInputText/JoinSettingInputText';
import JoinHistoryList from '@/components/templates/Join/JoinHistory/JoinHistoryList';
import React, { useEffect } from 'react';
import Default from '@/components/templates/Join/Default/Default';
import TicketPrice from '@/components/templates/Join/TicketPrice/TicketPrice';
import JoinDorm from '@/components/templates/Join/Detail/JoinDorm/JoinDorm';
import BuildingPrice from '@/components/templates/Join/Detail/BuildingPrice/BuildingPrice';
import { joinApplicationState, joinModalState, termReqIsActiveState, termReqListState } from '@/recoil/join';
import { useRecoilState } from 'recoil';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { postDormitoryApplicationSetting, useIsJoinPeriod } from '@/apis/join';

const Writing = () => {
  const [applicationData, setApplicationData] = useRecoilState(joinApplicationState);
  const [termReqList, setTermReqList] = useRecoilState(termReqListState);
  const [termReqIsActive, setIsTermReqIsActive] = useRecoilState(termReqIsActiveState);
  const [modalState, setModalState] = useRecoilState(joinModalState);

  // termReqListState 값을 joinApplicationState에 동기화
  useEffect(() => {
    setApplicationData((prev) => ({
      ...prev,
      termReqList, // termReqListState의 값을 joinApplicationState에 업데이트
    }));
  }, [termReqList, setApplicationData]);
  const updateTitle = (title: string) => {
    setApplicationData({
      ...applicationData,
      title,
    });
  };

  const validateFields = () => {
    const { title, startDate, endDate, depositStartDate, depositEndDate, dormitoryRoomTypeReqList } = applicationData;

    // 필수 필드가 비어있다면 false 반환
    if (!title || !startDate || !endDate || !depositStartDate || !depositEndDate) {
      return false;
    }

    // 수용 가능 인원의 각 기숙사 인실이 비어있거나 0 이하인 경우 false 반환
    for (let room of dormitoryRoomTypeReqList) {
      if (room.acceptLimit === null || room.acceptLimit < 0) {
        continue; // acceptLimit이 0 미만이거나 null이면 해당 방은 검사하지 않음
      }
    }

    // 활성화된 기간(termReqIsActive[i]가 true인 경우)에 대해서만 체크
    for (let i = 0; i < termReqList.length; i++) {
      const term = termReqList[i];

      if (termReqIsActive[i]) {
        if (!term.termName || !term.startDate || !term.endDate) {
          return false; // 기간 이름, 시작일, 종료일이 비어있으면 false 반환
        }

        // 각 기숙사 방의 가격이 null이거나 0 미만인 경우 false 반환
        for (let dorm of term.dormitoryTermReqList) {
          // 해당 기숙사 방의 수용 인원이 0이면 가격 검사를 하지 않음
          const room = dormitoryRoomTypeReqList.find((room) => room.dormitoryRoomTypeId === dorm.dormitoryRoomTypeId);
          if (room && room.acceptLimit === 0) {
            continue; // 수용 인원이 0인 방은 검사하지 않음
          }

          // 가격이 null이거나 0 미만인 경우 false 반환
          if (dorm.price === null || dorm.price < 0) {
            return false;
          }
        }
      }
    }

    return true; // 모든 필드가 올바르게 입력된 경우 true 반환
  };

  const handleSubmit = () => {
    if (validateFields()) {
      setModalState((prevState) => ({
        ...prevState,
        isPostChecked: true,
      }));
    } else {
      setModalState((prevState) => ({
        ...prevState,
        isEmptyAlert: true,
      }));
    }
  };

  const handleConfirmSubmit = async () => {
    try {
      console.log('Sending applicationData:', applicationData);
      const response = await postDormitoryApplicationSetting(applicationData);
      if (response.check) {
        // 성공적으로 작성 완료된 경우 추가 작업이 필요 없으므로 알림 생략
        console.log('작성 완료되었습니다.');
        setModalState((prevState) => ({
          ...prevState,
          isPostChecked: false,
        }));
      } else {
        console.error('작성에 실패하였습니다.');
        alert('작성에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버 통신 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {modalState.isPostChecked && (
        <BackDrop isOpen={modalState.isPostChecked}>
          <ConfirmPrompt
            variant={'blue'}
            label={'작성을 완료하시겠습니까?'}
            onConfirm={handleConfirmSubmit} // onConfirm에 handleConfirmSubmit 연결
            onCancel={() =>
              setModalState((prevState) => ({
                ...prevState,
                isPostChecked: false,
              }))
            }
          />
        </BackDrop>
      )}
      {modalState.isEmptyAlert && (
        <BackDrop isOpen={modalState.isEmptyAlert}>
          <AlertPrompt
            variant={'blue'}
            label={'모든 내용을 작성해 주시기 바랍니다.'}
            onConfirm={() =>
              setModalState((prevState) => ({
                ...prevState,
                isEmptyAlert: false,
              }))
            }
          />
        </BackDrop>
      )}
      <div className='flex flex-col w-full'>
        <div className='H0 text-gray-grayscale50 flex items-center justify-center mb-32'>
          <h1>입사 신청 설정</h1>
        </div>
        <div className='flex itmes-center mb-27'>
          <h2 className='H4 text-gray-grayscale40 whitespace-nowrap mr-100'>제목</h2>
          <JoinSettingInputText
            input={applicationData.title}
            setInput={updateTitle}
            placeholder={'제목을 입력하세요.'}
          />
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
          <BtnMidVariant label={'작성 완료'} disabled={false} variant={'blue'} onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default Writing;
