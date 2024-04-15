import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import WithdrawalMemberManagementList from '@/components/organisms/WithdrawalMemberManagement/WithdrawalMemberManagementList';
import React from 'react';

type Props = {
  input: string;
  setInput: (id: string) => void;
  list: {
    index: number;
    name: string;
    schoolNumber: string;
    bonusPoint: number;
    minusPoint: number;
    date: string;
  }[];
};

const StudentMangement = ({ input, setInput, list }: Props) => {
  return (
    <div className='flex flex-col w-[1145px] relative'>
      <div className='flex items-center mb-32'>
        <div className='flex justify-center w-[1090px]'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>탈퇴 회원 관리</h1>
        </div>
        <div className='absolute right-0'>
          <SearchTextBox input={input} placeholder='이름 또는 학번' setInput={setInput} />
        </div>
      </div>
      <WithdrawalMemberManagementList list={list} />
    </div>
  );
};

export default StudentMangement;
