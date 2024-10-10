'use client';
import React, { useEffect, useState, useCallback } from 'react';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import CurrentStudentMethod from '@/components/templates/Standard/ScoreCalculation/CurrentStudentMethod/CurrentStudentMethod';
import FreshmanMethod from '@/components/templates/Standard/ScoreCalculation/FreshmanMethod/FreshmanMethod';
import { useStandard, postStandard } from '@/apis/standard';
import { DistanceScoreResList, StandardSettingRequest, StandardSettingResponseInformation } from '@/types/standard';
import PledgeWriting from '@/components/templates/Standard/PledgeWriting/PledgeWriting';
import { distanceScoreState, standardSettingModalState } from '@/recoil/standard';
import { useRecoilState } from 'recoil';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import RegionPrompt from '@/components/templates/Standard/RegionPrompt/RegionPrompt';

const Page = () => {
  const { data, isLoading } = useStandard();
  const [isFormValid, setIsFormValid] = useState(false);
  const [modalState, setModalState] = useRecoilState(standardSettingModalState);
  const [distanceScoreResList, setDistanceScoreResList] = useRecoilState(distanceScoreState);

  const [standard, setStandard] = useState<StandardSettingResponseInformation>({
    minScore: 0,
    scoreRatio: 0,
    distanceRatio: 0,
    pointReflection: false,
    tiePriority: 'SCORE',
    freshmanStandard: 'LONG_DISTANCE',
    prioritySelection: false,
    movePassSelection: true,
    sameSmoke: false,
    sameTerm: true,
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
      entrancePledge.trim() !== ''
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
    }
  }, [data, setDistanceScoreResList]);

  useEffect(() => {
    checkFormValidity();
  }, [standard, checkFormValidity]);

  // 기준 데이터를 서버로 보내는 함수
  const handlePostStandard = async () => {
    try {
      const standardRequest: StandardSettingRequest = {
        ...standard,
        distanceScoreResList: distanceScoreResList.map((score) => ({
          distanceScoreId: score.distanceScoreId,
          distanceScore: score.distanceScore,
          regionResList: score.regionResList,
        })),
      };
      await postStandard(standardRequest);
      alert('기준이 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error(error);
      alert('기준 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {modalState.region.isOpened && (
        <BackDrop isOpen={modalState.region.isOpened}>
          <RegionPrompt />
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
        {/* 서약서 작성 */}
        <div className='w-full'>
          <PledgeWriting
            content={standard.entrancePledge}
            setEditorHtml={(content) => setStandard({ ...standard, entrancePledge: content })}
          />
        </div>
        <div className='mt-100 mb-47'>
          <BtnMidVariant
            onClick={handlePostStandard}
            label={data ? '수정하기' : '작성하기'} // 데이터 존재 여부에 따라 버튼 레이블 변경
            disabled={!isFormValid || isLoading} // 유효성 검사 실패 또는 로딩 중일 때 비활성화
            variant={'blue'}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
