'use client';
import React, { useState } from 'react';
import PlusBtnVariant from '@/components/atoms/AllBtn/PlusBtnVariant/PlusBtnVariant';
import GrayBtn from '@/components/atoms/AllBtn/GrayBtn/GrayBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import StudentManagementList from '@/components/organisms/StudentManagement/StudentManagementList';
import { useRouter } from 'next/navigation';

const StudentMangement = () => {
  const router = useRouter();
  const [input, setInput] = useState('');

  const list = [
    {
      id: 1,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 2,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 3,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 4,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 5,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 6,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 7,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 8,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 9,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 10,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 11,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 12,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 13,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 14,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
    {
      id: 15,
      name: '김김김',
      schoolNumber: '99999999',
      gender: '남성',
      building: '명덕관(4인실)',
      room: '999호',
      bonusPoint: 9,
      minusPoint: 9,
      schoolStatus: '재학',
    },
  ];

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
        genderDown={false}
        onGenderClick={(genderDown: boolean) => genderDown}
        buildingDown={false}
        onBuildingClick={(genderDown: boolean) => genderDown}
        bonusPointDown={false}
        onBonusPointClick={(genderDown: boolean) => genderDown}
        minusPointDown={false}
        onMinusPointClick={(genderDown: boolean) => genderDown}
      />
      <div className='flex justify-end mt-13'>
        <PlusBtnVariant
          label='사생 추가'
          disabled={false}
          variant='blue'
          onClick={() => {
            router.push(`/dashboard/StudentManagement/Plus`);
          }}
        />
      </div>
    </div>
  );
};

export default StudentMangement;
