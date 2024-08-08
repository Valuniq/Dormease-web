'use client';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SelectBuildingDropdown from '@/components/atoms/Dropdown/SelectBuildingDropdown/SelectBuildingDropdown';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import PassMemberList from '@/components/organisms/PassMember/PassMemberList';
import { BuildingManagementResponseInformation } from '@/types/dorm';
import React, { useState } from 'react';
import { mockApplicantList } from '../(Applicant)/Applicant/mockData';
import { mockPassMemberList } from './mockData';
const initialSelect: BuildingManagementResponseInformation = {
  id: 0,
  name: '',
};

const Page = () => {
  const [select, setSelect] = useState<BuildingManagementResponseInformation>(initialSelect);
  const handleSelect = (id: number, name: string) => {
    setSelect({ id, name });
  };
  return (
    <div className='w-[1250px] flex flex-col items-start'>
      <div className='mb-20 w-full flex items-center justify-between'>
        <h1 className='H0 text-gray-grayscale50'>합격자 명단</h1>
        <SelectBuildingDropdown
          isOn={false}
          list={[]}
          select={select}
          setSelect={handleSelect}
          setIsOn={function (isOn: boolean): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>

      <div className='mb-40 flex items-center ml-auto'>
        <DatePicker
          title='룸메이트 신청기간'
          startDate={undefined}
          endDate={undefined}
          setStartDate={function (startDate: Date): void {
            throw new Error('Function not implemented.');
          }}
          setEndDate={function (endDate: Date): void {
            throw new Error('Function not implemented.');
          }}
          handlePosting={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <div className='ml-26'>
          <SearchTextBox
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'검색어를 입력해주세요.'}
          />
        </div>
      </div>
      <PassMemberList passMemberLists={mockPassMemberList} />
      <div className='mt-29 w-691 ml-auto flex items-center justify-between'>
        <BtnMidVariant label={'매칭시작'} disabled={false} variant={'blue'} />
        <BtnMidVariant label={'완료'} disabled={false} variant={'green'} />
      </div>
    </div>
  );
};

export default Page;
