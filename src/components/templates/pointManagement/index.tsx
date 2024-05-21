'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PointManagementList from '@/components/organisms/PointManagement/PointManagementList';
import React from 'react';
import { PointMemberResponseDataList } from '@/types/pointManagement';
import { selectedMemberIdForPoint } from '@/recoil/pointManagement';
import { useRecoilState } from 'recoil';

const index = ({ list }: { list: PointMemberResponseDataList[] }) => {
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForPoint);
  return (
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
        pointManagementLists={list}
        plusSort={false}
        setPlusSort={function (plusSort: boolean): void {}}
        minusSort={false}
        setMinusSort={function (minusSort: boolean): void {}}
      />
      <div className='mt-13 flex items-center justify-between'>
        <BtnMidVariant label={'리스트 관리'} disabled={false} variant={'gray'} />
        <BtnMidVariant label={'상/벌점 부여'} disabled={selectedMemberId.length == 0} variant={'blue'} />
      </div>
    </div>
  );
};

export default index;
