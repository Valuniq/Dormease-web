'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PointManagementList from '@/components/organisms/PointManagement/PointManagementList';
import React, { useEffect } from 'react';
import { PointListResponseInfo, PointMemberResponseDataList, ResidentPointResponse } from '@/types/pointManagement';
import {
  promptBonusState,
  promptClientBonusState,
  promptClientMinusState,
  promptMinusState,
  selectedMemberIdForPointState,
} from '@/recoil/pointManagement';
import { useRecoilState, useRecoilValue } from 'recoil';
import PenaltyPrompt from '@/components/organisms/Prompt/PenaltyPrompt/PenaltyPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import PenaltyHistoryPrompt from '@/components/organisms/Prompt/PenaltyHistoryPrompt/PenaltyHistoryPrompt';
import { getPointsByResidentId } from '@/apis/PointManagment';
import page from '@/app/page';
import useSWR from 'swr';

const index = ({
  pointManagementLists,
  pointLists,
}: {
  pointManagementLists: PointMemberResponseDataList[];
  pointLists: PointListResponseInfo[];
}) => {
  const selectedMemberId = useRecoilValue(selectedMemberIdForPointState);
  const [bonusLists, setBonusLists] = useRecoilState(promptBonusState);
  const [minusLists, setMinusLists] = useRecoilState(promptMinusState);
  const [tempBonusLists, setTempBonusLists] = useRecoilState(promptClientBonusState);
  const [tempMinusLists, setTempMinusLists] = useRecoilState(promptClientMinusState);
  const { isOpened, handleOpenModal } = usePointManagementModal();

  useEffect(() => {
    setBonusLists(pointLists.filter((i) => i.pointType === 'BONUS'));
    setMinusLists(pointLists.filter((i) => i.pointType === 'MINUS'));
    setTempBonusLists([{ content: '', score: 0, pointType: 'BONUS', pointId: -1 }]);
    setTempMinusLists([{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }]);
  }, [isOpened.pointDetail]);

  console.log(selectedMemberId);

  return (
    <>
      {isOpened.pointDetail && (
        <BackDrop children={<PenaltyPrompt closeModalName={'pointDetail'} />} isOpen={isOpened.pointDetail} />
      )}
      {isOpened.givePoint && (
        <BackDrop children={<PenaltyPrompt closeModalName={'givePoint'} />} isOpen={isOpened.givePoint} />
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
        <PointManagementList
          pointManagementLists={pointManagementLists}
          plusSort={false}
          setPlusSort={function (): void {}}
          minusSort={false}
          setMinusSort={function (): void {}}
        />
        <div className='mt-13 flex items-center justify-between'>
          <BtnMidVariant
            onClick={() => handleOpenModal('pointDetail')}
            label={'리스트 관리'}
            disabled={false}
            variant={'gray'}
          />
          <BtnMidVariant
            onClick={() => handleOpenModal('givePoint')}
            label={'상/벌점 부여'}
            disabled={selectedMemberId.length == 0}
            variant={'blue'}
          />
        </div>
      </div>
    </>
  );
};

export default index;
