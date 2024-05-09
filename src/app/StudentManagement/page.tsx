'use client';

import React from 'react';
import PlusBtnVariant from '@/components/atoms/AllBtn/PlusBtnVariant/PlusBtnVariant';
import GrayBtn from '@/components/atoms/AllBtn/GrayBtn/GrayBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import StudentManagementList from '@/components/organisms/StudentManagement/StudentManagementList';

type Props = {
  input: string;
  setInput: (id: string) => void;
  genderDown: boolean;
  onGenderClick: (genderDown: boolean) => void;
  buildingDown: boolean;
  onBuildingClick: (genderDown: boolean) => void;
  bonusPointDown: boolean;
  onBonusPointClick: (genderDown: boolean) => void;
  minusPointDown: boolean;
  onMinusPointClick: (genderDown: boolean) => void;
  onStudentClick: (schoolNumber: string) => void;
  list: {
    index: number;
    name: string;
    schoolNumber: string;
    gender: string;
    building: string;
    room: string;
    bonusPoint: number;
    minusPoint: number;
    schoolStatus: string;
  }[];
};

const StudentMangement = ({
  input,
  setInput,
  genderDown,
  onGenderClick,
  buildingDown,
  onBuildingClick,
  bonusPointDown,
  onBonusPointClick,
  minusPointDown,
  onMinusPointClick,
  onStudentClick,
  list,
}: Props) => {
  return (
    <div className='flex flex-col w-[1225px]'>
      <div className='flex justify-between items-center mb-32'>
        <h1 className='H0 text-gray-grayscale50 text-nowrap'>사생관리</h1>
        <div className='flex gap-19'>
          <SearchTextBox input={input} placeholder='이름 또는 학번' setInput={setInput} />
          <GrayBtn label='엑셀 업로드' disabled={false} />
          <GrayBtn label='엑셀 다운로드' disabled={false} />
        </div>
      </div>
      <StudentManagementList
        list={list}
        genderDown={genderDown}
        onGenderClick={onGenderClick}
        buildingDown={buildingDown}
        onBuildingClick={onBuildingClick}
        bonusPointDown={bonusPointDown}
        onBonusPointClick={onBonusPointClick}
        minusPointDown={minusPointDown}
        onMinusPointClick={onMinusPointClick}
        onStudentClick={onStudentClick}
      />
      <div className='flex justify-end mt-13'>
        <PlusBtnVariant label='사생 추가' disabled={false} variant='blue' />
      </div>
    </div>
  );
};

export default StudentMangement;
