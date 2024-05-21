'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PointManagementList from '@/components/organisms/PointManagement/PointManagementList';
import React, { useEffect } from 'react';
import { PointListResponseInfo, PointMemberResponseDataList } from '@/types/pointManagement';
import {
  promptBonusState,
  promptClientBonusState,
  promptClientMinusState,
  promptMinusState,
  selectedMemberIdForPointState,
} from '@/recoil/pointManagement';
import { useRecoilState } from 'recoil';
import PenaltyPrompt from '@/components/organisms/Prompt/PenaltyPrompt/PenaltyPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import { modalState } from '@/recoil/modal';

const index = ({
  pointManagementLists,
  pointLists,
}: {
  pointManagementLists: PointMemberResponseDataList[];
  pointLists: PointListResponseInfo[];
}) => {
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForPointState);
  const [isOpened, setIsOpened] = useRecoilState(modalState);
  const [bonusLists, setBonusLists] = useRecoilState(promptBonusState);
  const [minusLists, setMinusLists] = useRecoilState(promptMinusState);
  const [tempBonusLists, setTempBonusLists] = useRecoilState(promptClientBonusState);
  const [tempMinusLists, setTempMinusLists] = useRecoilState(promptClientMinusState);

  useEffect(() => {
    setBonusLists(pointLists.filter((i) => i.pointType === 'BONUS'));
    setMinusLists(pointLists.filter((i) => i.pointType === 'MINUS'));
    setTempBonusLists([{ content: '', score: 0, pointType: 'BONUS', pointId: -1 }]);
    setTempMinusLists([{ content: '', score: 0, pointType: 'MINUS', pointId: -1 }]);
  }, [isOpened]);

  return (
    <>
      {isOpened && (
        <BackDrop
          children={<PenaltyPrompt onConfirm={function (): void {}} onConfirmDisabled={false} />}
          isOpen={isOpened}
        />
      )}

      <div className='w-[1250px]'>
        <div className='flex items-center justify-between mb-40'>
          <h1 className='H0 text-gray-grayscale50'>상/벌점 관리</h1>
          <SearchTextBox
            placeholder='이름 또는 학번'
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className='w-full bg-red-red40 ml-auto '></div>
        <PointManagementList
          pointManagementLists={pointManagementLists}
          plusSort={false}
          setPlusSort={function (plusSort: boolean): void {}}
          minusSort={false}
          setMinusSort={function (minusSort: boolean): void {}}
        />
        <div className='mt-13 flex items-center justify-between'>
          <BtnMidVariant onClick={() => setIsOpened(true)} label={'리스트 관리'} disabled={false} variant={'gray'} />
          <BtnMidVariant
            onClick={() => setIsOpened(true)}
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
