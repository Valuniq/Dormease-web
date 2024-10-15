'use client';
import React, { useEffect, useState, useCallback } from 'react';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import CurrentStudentMethod from '@/components/templates/Standard/ScoreCalculation/CurrentStudentMethod/CurrentStudentMethod';
import FreshmanMethod from '@/components/templates/Standard/ScoreCalculation/FreshmanMethod/FreshmanMethod';
import { useStandard, postStandard, patchStandard } from '@/apis/standard';
import { DistanceScoreResList, StandardSettingRequest, StandardSettingResponseInformation } from '@/types/standard';
import PledgeWriting from '@/components/templates/Standard/PledgeWriting/PledgeWriting';
import { distanceScoreState, standardSettingModalState } from '@/recoil/standard';
import { useRecoilState } from 'recoil';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import RegionPrompt from '@/components/templates/Standard/RegionPrompt/RegionPrompt';
import AcceptanceMethod from '@/components/templates/Standard/AcceptanceMethod/AcceptanceMethod';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { BASE_URL } from '@/constants/path';
import { mutate } from 'swr';
import useScrollToTop from '@/hooks/useScrollToTop';

const Page = () => {
  const { data, isLoading } = useStandard();
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalState, setModalState] = useRecoilState(standardSettingModalState);
  const [distanceScoreResList, setDistanceScoreResList] = useRecoilState(distanceScoreState);
  const [isPatchMode, setIsPatchMode] = useState(false); // 저장, 편집 여부
  const [isSaveComplete, setIsSaveComplete] = useState(false); // 저장, 편집 작업 완료 여부
  const [standard, setStandard] = useState<StandardSettingResponseInformation>({
    standardSettingId: 0,
    minScore: 0,
    scoreRatio: 0,
    distanceRatio: 0,
    pointReflection: false,
    tiePriority: 'SCORE',
    freshmanStandard: 'LONG_DISTANCE',
    prioritySelection: false,
    movePassSelection: false,
    sameSmoke: false,
    sameTerm: false,
    entrancePledge: '',
    distanceScoreResList: distanceScoreResList, // 초기 값을 Recoil에서 가져옴
  });

  // 폼 유효성 검사를 위한 함수
  const checkFormValidity = useCallback(() => {
    const { minScore, scoreRatio, distanceRatio, pointReflection, tiePriority, freshmanStandard, entrancePledge } =
      standard;
    if (
      minScore >= 0 &&
      scoreRatio >= 0 &&
      distanceRatio >= 0 &&
      pointReflection !== null &&
      tiePriority !== '' &&
      freshmanStandard !== '' &&
      entrancePledge !== ''
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [standard]);

  // API 응답 데이터를 받아와서 기준 설정
  useEffect(() => {
    if (data && data.check) {
      setStandard({
        ...data.information,
        distanceScoreResList: data.information.distanceScoreResList,
      });
      // Recoil 상태에 초기화
      setDistanceScoreResList(data.information.distanceScoreResList);
      setIsPatchMode(true); // 수정 모드
    }
  }, [data, setDistanceScoreResList]);

  useEffect(() => {
    checkFormValidity();
  }, [checkFormValidity]);

  // 스크롤을 최상단으로 이동하는 훅 사용
  useScrollToTop(isSaveComplete);

  // 기준 데이터를 서버로 보내는 함수 (생성 및 수정 통합)
  const handleSaveStandard = async () => {
    try {
      // API에 맞는 형식으로 변환된 요청 데이터
      const distanceScoreReqList = distanceScoreResList.map((score) => ({
        distanceScoreId: score.distanceScoreId,
        regionIdList: score.regionResList.map((region) => region.regionId),
      }));

      const standardRequest: StandardSettingRequest = {
        ...standard,
        distanceScoreReqList: distanceScoreReqList,
      };

      if (isPatchMode && data) {
        await patchStandard(standardRequest, data.information.standardSettingId);
      } else {
        await postStandard(standardRequest);
      }

      mutate(`${BASE_URL}/api/v1/web/standardSetting`);
      setModalState((prev) => ({ ...prev, standardWritingEdit: false }));
      // 저장 후 페이지를 최상단으로 스크롤
      setIsSaveComplete(true);
      setTimeout(() => {
        setIsSaveComplete(false); // 상태를 다시 false로 초기화
      }, 500);
    } catch (error) {
      console.error('서버로 요청 중 오류 발생:', error);
      alert('기준 처리 중 오류가 발생했습니다.');
    }
  };

  // 빈 태그를 처리하는 함수
  const cleanHtmlContent = (htmlContent: string) => {
    // HTML 태그를 제거한 텍스트가 비어있다면 빈 문자열로 처리
    const strippedContent = htmlContent.replace(/<\/?[^>]+(>|$)/g, '').trim();
    return strippedContent === '' ? '' : htmlContent;
  };

  return (
    <>
      {modalState.region.isOpened && (
        <BackDrop isOpen={modalState.region.isOpened}>
          <RegionPrompt />
        </BackDrop>
      )}
      {modalState.standardWritingEdit && (
        <BackDrop isOpen={modalState.standardWritingEdit}>
          <ConfirmPrompt
            variant={'blue'}
            label={isPatchMode ? '수정을 완료하시겠습니까?' : '작성을 완료하시겠습니까?'}
            onConfirm={handleSaveStandard}
            onCancel={() => setModalState((prev) => ({ ...prev, standardWritingEdit: false }))}
          />
        </BackDrop>
      )}
      <div className='w-[1200px] flex flex-col justify-center items-center'>
        <div className='mb-54'>
          <h1 className='H0 text-gray-grayscale50'>기준 설정</h1>
        </div>
        {/* 현재 학생 기준 설정 */}
        <CurrentStudentMethod standard={standard} setStandard={setStandard} />
        <div className='w-full h-2 bg-gray-grayscale30 my-50' />
        {/* 신입생 기준 설정 */}
        <FreshmanMethod
          freshmanStandard={standard.freshmanStandard}
          setFreshmanStandard={(value) => setStandard({ ...standard, freshmanStandard: value })}
        />
        <div className='w-full h-2 bg-gray-grayscale30 my-50' />
        {/* 합격 및 배정 방식 */}
        <AcceptanceMethod
          prioritySelection={standard.prioritySelection}
          setPrioritySelection={(value) => setStandard({ ...standard, prioritySelection: value })}
          movePassSelection={standard.movePassSelection}
          setMovePassSelection={(value) => setStandard({ ...standard, movePassSelection: value })}
          sameSmoke={standard.sameSmoke}
          setSameSmoke={(value) => setStandard({ ...standard, sameSmoke: value })}
          sameTerm={standard.sameTerm}
          setSameTerm={(value) => setStandard({ ...standard, sameTerm: value })}
        />
        <div className='w-full h-2 bg-gray-grayscale30 my-50' />
        {/* 서약서 작성 */}
        <div className='w-full'>
          <PledgeWriting
            content={standard.entrancePledge}
            setEditorHtml={(content) => {
              const cleanedContent = cleanHtmlContent(content);
              setStandard({ ...standard, entrancePledge: cleanedContent });
            }}
          />
        </div>
        <div className='mt-100 mb-47'>
          <BtnMidVariant
            onClick={() => setModalState((prev) => ({ ...prev, standardWritingEdit: true }))}
            label={isPatchMode ? '수정하기' : '작성하기'} // 데이터 존재 여부에 따라 버튼 레이블 변경
            disabled={!isFormValid || isLoading} // 유효성 검사 실패 또는 로딩 중일 때 비활성화
            variant={'blue'}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
