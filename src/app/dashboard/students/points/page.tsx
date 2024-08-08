'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import React, { useEffect, useState } from 'react';
import { PointListResponseInfo, PointMemberResponseDataList } from '@/types/point';
import {
  pointManagementModalState,
  promptBonusState,
  promptClientBonusState,
  promptClientMinusState,
  promptMinusState,
  selectedMemberIdForPointState,
} from '@/recoil/point';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import PenaltyGivePrompt from '@/components/templates/Point/Prompt/PenaltyGivePrompt/PenaltyGivePrompt';
import PenaltyManagementPrompt from '@/components/templates/Point/Prompt/PenaltyManagementPrompt/PenaltyManagementPrompt';
import AlertPrompt from '@/components/templates/Point/Prompt/AlertPrompt/AlertPrompt';
import { postPointsDetail } from '@/apis/point';
import { mockPointMemberResponse, mockPointListResponse } from './mockData';
import PointList from '@/components/templates/Point/List/PointList';

const Page = () => {
  const selectedMemberId = useRecoilValue(selectedMemberIdForPointState);
  const [bonusLists, setBonusLists] = useRecoilState(promptBonusState);
  const [minusLists, setMinusLists] = useRecoilState(promptMinusState);
  const [tempBonusLists, setTempBonusLists] = useRecoilState(promptClientBonusState);
  const [tempMinusLists, setTempMinusLists] = useRecoilState(promptClientMinusState);
  const { isOpened, handleOpenModal } = usePointManagementModal();
  const setPointManagementModal = useSetRecoilState(pointManagementModalState);

  const handleConfirm = async () => {
    console.log(tempBonusLists);
    console.log(bonusLists);
    try {
      const filteredBonusLists = tempBonusLists.filter((list) => list.content && list.score > 0);
      const filteredMinusLists = tempMinusLists.filter((list) => list.content && list.score > 0);
      const response = await postPointsDetail(filteredBonusLists, filteredMinusLists);
      console.log('상벌점 내역 등록 성공:', response);
      setPointManagementModal((prev) => ({ ...prev, pointManagement: false, pointManagementConfirm: false }));
      // 데이터 새로고침 로직 추가
    } catch (error) {
      console.error('상벌점 내역 등록 실패:', error);
    }
  };

  useEffect(() => {
    setBonusLists(mockPointListResponse.information.filter((i) => i.pointType === 'BONUS'));
    setMinusLists(mockPointListResponse.information.filter((i) => i.pointType === 'MINUS'));
    setTempBonusLists([{ content: '', score: 0, pointType: 'BONUS', pointId: -1 }]);
    setTempMinusLists([{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }]);
  }, [isOpened.pointManagement]);

  const [pointManagementData, setPointManagementData] = useState<PointMemberResponseDataList[]>([]);
  const [pointLists, setPointLists] = useState<PointListResponseInfo[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setPointManagementData(mockPointMemberResponse.information.dataList);
    setPointLists(mockPointListResponse.information);
  }, []);

  return (
    <>
      {isOpened.pointManagement && (
        <BackDrop isOpen={isOpened.pointManagement}>
          <PenaltyManagementPrompt />
        </BackDrop>
      )}
      {isOpened.pointGive && (
        <BackDrop isOpen={isOpened.pointGive}>
          <PenaltyGivePrompt />
        </BackDrop>
      )}
      {isOpened.pointManagementConfirm && (
        <BackDrop isOpen={isOpened.pointManagementConfirm}>
          <AlertPrompt
            variant={'blue'}
            label={'상/벌점 리스트를 저장하시겠습니까?'}
            modalName={'pointManagementConfirm'}
            onConfirm={handleConfirm}
          />
        </BackDrop>
      )}

      <div className='w-[1250px]'>
        <div className='flex items-center justify-between mb-40'>
          <h1 className='H0 text-gray-grayscale50'>상/벌점 관리</h1>
          <SearchTextBox
            placeholder='이름 또는 학번'
            input={''}
            setInput={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className='w-full bg-red-red40 ml-auto '></div>
        <PointList
          pointManagementLists={pointManagementData}
          plusSort={false}
          setPlusSort={function (): void {}}
          minusSort={false}
          setMinusSort={function (): void {}}
        />
        <div className='mt-13 flex items-center justify-between'>
          <BtnMidVariant
            onClick={() => handleOpenModal('pointManagement')}
            label={'리스트 관리'}
            disabled={false}
            variant={'gray'}
          />
          <BtnMidVariant
            onClick={() => handleOpenModal('pointGive')}
            label={'상/벌점 부여'}
            disabled={selectedMemberId.length == 0}
            variant={'blue'}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
