'use client';
import React, { useCallback, useEffect, useState } from 'react';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import AcceptanceMethod from '@/components/templates/Standard/AcceptanceMethod/AcceptanceMethod';
import PledgeWriting from '@/components/templates/Standard/PledgeWriting/PledgeWriting';
import CurrentStudentMethod from '@/components/templates/Standard/ScoreCalculation/CurrentStudentMethod/CurrentStudentMethod';
import FreshmanMethod from '@/components/templates/Standard/ScoreCalculation/FreshmanMethod/FreshmanMethod';
import { StandardSettingRequest, StandardSettingResponseInformation } from '@/types/standard';
import { useStandard, postStandard } from '@/apis/standard';

const Page = () => {
  // 기본 거리 점수 리스트 0점부터 4.5점까지 초기화
  const defaultDistanceScoreList = Array.from({ length: 10 }, (_, i) => ({
    distanceScore: i as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    regionNameList: '',
  }));

  const { data, error, isLoading } = useStandard();
  const [isFormValid, setIsFormValid] = useState(false); // 폼 유효성 상태

  const [standard, setStandard] = useState<StandardSettingResponseInformation>({
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
    distanceScoreResList: defaultDistanceScoreList,
  });

  const [standardRequest, setStandardRequest] = useState<StandardSettingRequest>({
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
    distanceScoreReqList: defaultDistanceScoreList,
  });

  const handleSetEditorHtml = (content: string) => {
    console.log('Editor content:', content);
  };

  // 기준 데이터를 등록하는 함수
  const handlePostStandard = async () => {
    try {
      setStandardRequest({
        ...standardRequest,
        distanceScoreReqList: standard.distanceScoreResList.length > 0 ? standard.distanceScoreResList : [], // null이 아닌 빈 배열 전송
      });
      await postStandard(standardRequest);
      alert('기준이 성공적으로 작성되었습니다.');
    } catch (error) {
      console.error(error);
      alert('기준 작성 중 오류가 발생했습니다.');
    }
  };

  // 필수 값들이 모두 채워졌는지 확인하는 함수 (거리 점수 제외)
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

  // 응답이 있을 때 기준 데이터를 설정
  useEffect(() => {
    if (data && data.check) {
      setStandard({
        ...data.information,
        distanceScoreResList: data.information.distanceScoreResList || defaultDistanceScoreList,
      });
    }
  }, [data, defaultDistanceScoreList]);

  // standard 상태가 변경될 때마다 유효성 검사를 수행
  useEffect(() => {
    checkFormValidity();
  }, [standard, checkFormValidity]);

  return (
    <div className='w-[1200px] flex flex-col justify-center items-center'>
      <div className='mb-54'>
        <h1 className='H0 text-gray-grayscale50'>기준 설정</h1>
      </div>
      <CurrentStudentMethod standard={standard} setStandard={setStandard} />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
      <FreshmanMethod
        freshmanStandard={standard.freshmanStandard}
        setFreshmanStandard={(value) => setStandard({ ...standard, freshmanStandard: value })}
      />
      <div className='w-full h-2 bg-gray-grayscale30 my-50' />
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
      <div className='w-full'>
        <PledgeWriting setEditorHtml={handleSetEditorHtml} />
      </div>
      <div className='mt-100 mb-47'>
        <BtnMidVariant
          onClick={data ? handlePostStandard : handlePostStandard} // 폼이 유효할 때만 버튼 클릭 가능
          label={data ? '수정하기' : '작성하기'}
          disabled={isFormValid} // 필수 값이 모두 입력되지 않았거나 로딩 중이면 비활성화
          variant={'blue'}
        />
      </div>
    </div>
  );
};

export default Page;
