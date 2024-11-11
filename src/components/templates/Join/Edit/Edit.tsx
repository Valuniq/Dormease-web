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
import { ModifyDormitoryApplicationSettingReq, ModifyDormitorySettingTermReq, ModifyMealTicketReq } from '@/types/join';

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
    // 기숙사 정보 + 수용 인원 리스트 변환
    const modifyDormitorySettingTermReqList = applicationData.dormitorySettingTermResList
      .map((term) => {
        // 서버에서 받은 기존 데이터인지 확인
        const existingTerm = data?.information?.dormitorySettingTermResList.find(
          (existing) => existing.dormitoryRoomTypeId === term.dormitoryRoomTypeId,
        );

        if (term.acceptLimit === 0) {
          // 수용 가능 인원이 0명으로 설정되었다면 전송하지 않음
          return null;
        }

        if (existingTerm) {
          // 기존 서버 데이터인 경우, 수정한 값 그대로 전송
          return {
            dormitorySettingTermId: existingTerm.dormitorySettingTermId,
            dormitoryRoomTypeId: term.dormitoryRoomTypeId,
            acceptLimit: term.acceptLimit ?? 0,
          };
        } else {
          // 서버 데이터가 아닌 새 항목은 termId를 null로 설정
          return {
            dormitorySettingTermId: null,
            dormitoryRoomTypeId: term.dormitoryRoomTypeId,
            acceptLimit: term.acceptLimit ?? 0,
          };
        }
      })
      // null 값 제거 (전송하지 않을 항목들)
      .filter((term) => term !== null);

    // 거주 기간 리스트 변환
    const modifyTermReqList = applicationData.termResList
      .filter((term, index) => termResIsActive[index]) // 활성화된 항목만 필터링
      .map((term) => {
        // 기존 서버 데이터에서 가져온 항목인지 확인
        const existingTerm = data?.information?.termResList.find((existing) => existing.termId === term.termId);

        return {
          termId: existingTerm ? existingTerm.termId : null, // 기존 항목이면 termId 유지, 새로운 항목이면 null
          termName: term.termName,
          startDate: term.startDate,
          endDate: term.endDate,
          modifyDormitoryTermReqList: term.dormitoryTermResList.map((dorm) => ({
            dormitoryTermId: dorm.dormitoryTermId < 0 ? null : dorm.dormitoryTermId, // 서버에서 받은 값을 사용
            dormitoryRoomTypeId: dorm.dormitoryRoomTypeId,
            price: dorm.price,
          })),
        };
      });

    // 식권 리스트 변환
    const modifyMealTicketReqList = applicationData.mealTicketResList
      .map((ticket) => {
        const existingTicket = data?.information?.mealTicketResList.find((existing) => existing.id === ticket.id);
        if (!existingTicket && (!ticket.count || !ticket.price)) {
          return null; // 삭제된 항목은 null 처리
        }

        return {
          mealTicketId: existingTicket ? existingTicket.id : null, // 수정 or 새로 생성된 항목 처리
          count: ticket.count,
          price: ticket.price,
        };
      })
      .filter((ticket) => ticket !== null) as ModifyMealTicketReq[]; // 여기서 null 값 제거

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
      setModalState((prevState) => ({ ...prevState, isPostChecked: false }));
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
