'use client';

import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import WithdrawalMemberManagementList from '@/components/organisms/WithdrawalMemberManagement/WithdrawalMemberManagementList';
import { WithdrawalMemberResponseDataList } from '@/types/withdrawal';

const WithdrawalMemberManagementTemplate = ({
  list,
  input,
  setInput,
}: {
  list: WithdrawalMemberResponseDataList[];
  input: string;
  setInput: (value: string) => void;
}) => {
  return (
    <div className='flex flex-col w-[1145px] relative'>
      <div className='flex items-center mb-32'>
        <div className='flex justify-center w-[1090px]'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>탈퇴 회원 관리</h1>
        </div>
        {list && (
          <div className='absolute right-0'>
            <SearchTextBox input={input} setInput={setInput} placeholder='이름 또는 학번' />
          </div>
        )}
      </div>
      <WithdrawalMemberManagementList list={list} />
    </div>
  );
};

export default WithdrawalMemberManagementTemplate;
