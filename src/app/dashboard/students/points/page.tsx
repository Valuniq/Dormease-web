'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import React from 'react';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import PenaltyGivePrompt from '@/components/templates/Point/Prompt/PenaltyGivePrompt/PenaltyGivePrompt';
import PenaltyManagementPrompt from '@/components/templates/Point/Prompt/PenaltyManagementPrompt/PenaltyManagementPrompt';
import AlertPrompt from '@/components/templates/Point/Prompt/AlertPrompt/AlertPrompt';
import PointList from '@/components/templates/Point/List/PointList';
import { usePointManagement } from '@/hooks/usePointManagement';

const Page = () => {
  const {
    input,
    setInput,
    searchKeyword,
    handleSearch,
    userData,
    isLoadingMore,
    isLoadingInitialData,
    setSize,
    isEndReached,
    sortConfig,
    setSortConfig,
    handlePointManagemengConfirm,
    setDeletedIds,
    selectedMemberId,
    handleGrantPoints,
    userMutate,
    selectedBonusPoints,
    setSelectedBonusPoints,
    selectedMinusPoints,
    setSelectedMinusPoints,
  } = usePointManagement();

  const { isOpened, handleOpenModal } = usePointManagementModal();

  return (
    <>
      {isOpened.pointManagement && (
        <BackDrop isOpen={isOpened.pointManagement}>
          <PenaltyManagementPrompt onDelete={setDeletedIds} />
        </BackDrop>
      )}
      {isOpened.pointManagementConfirm && (
        <BackDrop isOpen={isOpened.pointManagementConfirm}>
          <AlertPrompt
            variant={'blue'}
            label={'상/벌점 리스트를 저장하시겠습니까?'}
            modalName={'pointManagementConfirm'}
            onConfirm={handlePointManagemengConfirm}
          />
        </BackDrop>
      )}
      {isOpened.pointGive && (
        <BackDrop isOpen={isOpened.pointGive}>
          <PenaltyGivePrompt
            selectedBonusPoints={selectedBonusPoints}
            setSelectedBonusPoints={setSelectedBonusPoints}
            selectedMinusPoints={selectedMinusPoints}
            setSelectedMinusPoints={setSelectedMinusPoints}
          />
        </BackDrop>
      )}
      {isOpened.pointGiveConfirm && (
        <BackDrop isOpen={isOpened.pointGiveConfirm}>
          <AlertPrompt
            variant={'blue'}
            label={'선택한 인원에게 상/벌점을 부여하시겠습니까?'}
            modalName={'pointGiveConfirm'}
            onConfirm={handleGrantPoints}
          />
        </BackDrop>
      )}
      <div className='w-[1250px]'>
        <div className='flex items-center justify-between mb-40'>
          <h1 className='H0 text-gray-grayscale50'>상/벌점 관리</h1>
          <SearchTextBox input={input} setInput={setInput} handleSearch={handleSearch} placeholder={'이름 또는 학번'} />
        </div>
        <div className='w-full bg-red-red40 ml-auto '></div>
        <PointList
          pointManagementLists={userData}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
          isLoading={isLoadingMore ?? false}
          isLoadingInitialData={isLoadingInitialData}
          isEndReached={isEndReached}
          setSize={setSize}
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
            disabled={selectedMemberId.length === 0}
            variant={'blue'}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
