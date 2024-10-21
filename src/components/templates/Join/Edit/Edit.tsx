'use client';

import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import JoinSettingInputText from '@/components/atoms/InputText/JoinSettingInputText/JoinSettingInputText';
import JoinHistoryList from '@/components/templates/Join/JoinHistory/JoinHistoryList';
import React, { useEffect } from 'react';

import { joinModalState, nowJoinApplicationState, termResIsActiveState, termResListState } from '@/recoil/join';
import { useRecoilState } from 'recoil';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import Default from './Default/Default';
import JoinDorm from './Detail/JoinDorm/JoinDorm';
import BuildingPrice from './Detail/BuildingPrice/BuildingPrice';
import TicketPrice from './TicketPrice/TicketPrice';
import { putDormitoryApplicationSetting, useNowJoin } from '@/apis/join';
import { ModifyDormitoryApplicationSettingReq, ModifyDormitorySettingTermReq } from '@/types/join';

const Edit = () => {
  const { data, error, isLoading } = useNowJoin();
  const [applicationData, setApplicationData] = useRecoilState(nowJoinApplicationState);
  const [termResList, setTermResList] = useRecoilState(termResListState);
  const [termResIsActive, setIsTermResIsActive] = useRecoilState(termResIsActiveState);
  const [modalState, setModalState] = useRecoilState(joinModalState);

  useEffect(() => {
    console.log('서버데이터', data);
    console.log('보낼 데이터', applicationData);
    if (data) {
      setApplicationData(data.information);
      setTermResList(data.information.termResList);
    }
  }, [data]);

  useEffect(() => {
    setApplicationData((prev) => ({
      ...prev,
      termResList,
    }));
  }, [termResList]);

  const updateTitle = (title: string) => {
    setApplicationData({
      ...applicationData,
      title: title ?? '',
    });
  };

  const validateFields = () => {
    const { title, startDate, endDate, depositStartDate, depositEndDate, dormitorySettingTermResList } =
      applicationData;

    // 필수 필드가 비어있다면 false 반환
    if (!title || !startDate || !endDate || !depositStartDate || !depositEndDate) {
      return false;
    }

    // 수용 가능 인원의 각 기숙사 인실이 비어있거나 0 이하인 경우 false 반환
    // for (let room of dormitoryRoomTypeResList) {
    //   if (room.acceptLimit === null || room.acceptLimit < 0) {
    //     continue; // acceptLimit이 0 미만이거나 null이면 해당 방은 검사하지 않음
    //   }
    // }

    // 활성화된 기간(termReqIsActive[i]가 true인 경우)에 대해서만 체크
    // for (let i = 0; i < termResList.length; i++) {
    //   const term = termResList[i];

    //   if (termResIsActive[i]) {
    //     if (!term.termName || !term.startDate || !term.endDate) {
    //       return false; // 기간 이름, 시작일, 종료일이 비어있으면 false 반환
    //     }

    //     // 각 기숙사 방의 가격이 null이거나 0 미만인 경우 false 반환
    //     for (let dorm of term.dormitoryTermResList) {
    //       // 해당 기숙사 방의 수용 인원이 0이면 가격 검사를 하지 않음
    //       const room = dormitoryRoomTypeResList.find((room) => room.dormitoryRoomTypeId === dorm.dormitoryRoomTypeId);
    //       if (room && room.acceptLimit === 0) {
    //         continue; // 수용 인원이 0인 방은 검사하지 않음
    //       }

    //       // 가격이 null이거나 0 미만인 경우 false 반환
    //       if (dorm.price === null || dorm.price < 0) {
    //         return false;
    //       }
    //     }
    //   }
    // }

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
    // 서버에서 받은 기존 데이터 가져오기
    const existingTerms = data?.information?.dormitorySettingTermResList ?? [];

    // 기숙사 정보 + 수용 인원 리스트 변환
    const modifyDormitorySettingTermReqList = applicationData.dormitorySettingTermResList
      .map((term) => {
        // 기존 데이터에서 동일한 dormitoryRoomTypeId를 가진 항목 찾기
        const existingTerm = existingTerms.find(
          (existing) => existing?.dormitoryRoomTypeId === term.dormitoryRoomTypeId,
        );

        // 기존 term이 있으면 ID 사용
        if (existingTerm) {
          return {
            dormitorySettingTermId: existingTerm.dormitorySettingTermId,
            dormitoryRoomTypeId: term.dormitoryRoomTypeId,
            acceptLimit: term.acceptLimit ?? 0,
          };
        }
        return null; // 조건에 맞지 않으면 null 반환
      })
      // null 값 및 dormitorySettingTermId가 undefined인 항목 필터링
      .filter((term) => term !== null && term.dormitorySettingTermId !== undefined);
    // 거주 기간 리스트 변환
    const modifyTermReqList = applicationData.termResList.map((term) => ({
      termId: term.termId,
      termName: term.termName,
      startDate: term.startDate,
      endDate: term.endDate,
      modifyDormitoryTermReqList: term.dormitoryTermResList.map((dorm) => ({
        dormitoryTermId: dorm.dormitoryTermId, // 서버에서 받은 값을 사용
        dormitoryRoomTypeId: dorm.dormitoryRoomTypeId,
        price: dorm.price,
      })),
    }));

    // 식권 리스트 변환
    const modifyMealTicketReqList = applicationData.mealTicketResList.map((ticket) => ({
      mealTicketId: ticket.id, // 서버에서 받은 값을 사용
      count: ticket.count,
      price: ticket.price,
    }));

    // 최종 요청 데이터
    const modifiedData: ModifyDormitoryApplicationSettingReq = {
      title: applicationData.title,
      startDate: applicationData.startDate,
      endDate: applicationData.endDate,
      depositStartDate: applicationData.depositStartDate,
      depositEndDate: applicationData.depositEndDate,
      securityDeposit: applicationData.securityDeposit,
      modifyDormitorySettingTermReqList: modifyDormitorySettingTermReqList as ModifyDormitorySettingTermReq[], // 타입 강제 지정
      modifyTermReqList,
      modifyMealTicketReqList,
    };
    // 요청 전 데이터 출력
    console.log('Sending data to server:', modifiedData);
    try {
      const response = await putDormitoryApplicationSetting(
        applicationData.dormitoryApplicationSettingId,
        modifiedData,
      );
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      {modalState.isPostChecked && (
        <BackDrop isOpen={modalState.isPostChecked}>
          <ConfirmPrompt
            variant={'blue'}
            label={'작성을 완료하시겠습니까?'}
            onConfirm={handleConfirmSubmit}
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
            input={applicationData.title || ''}
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

export default Edit;
