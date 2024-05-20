'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PointManagementList from '@/components/organisms/PointManagement/PointManagementList';
import React from 'react';
import { Props as PointManagementListBodyType } from '@/components/organisms/PointManagement/PointManagementListBody';

const index = ({ list }: { list: PointManagementListBodyType[] }) => {
  console.log(list);
  return (
    <div>
      <SearchTextBox
        placeholder='이름 또는 학번'
        input={''}
        setInput={function (id: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <PointManagementList
        pointManagementLists={list}
        isAllChecked={false}
        setIsAllChecked={function (isAllChecked: boolean): void {
          throw new Error('Function not implemented.');
        }}
        plusSort={false}
        setPlusSort={function (plusSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
        minusSort={false}
        setMinusSort={function (minusSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className='mt-13 flex items-center justify-between'>
        <BtnMidVariant label={'리스트 관리'} disabled={false} variant={'gray'} />
        <BtnMidVariant label={'상/벌점 부여'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default index;
