'use client';

import { getWithdrawalSearch } from '@/apis/Withdrawal';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import WithdrawalMemberManagementList from '@/components/organisms/WithdrawalMemberManagement/WithdrawalMemberManagementList';
import { WithdrawalMemberResponse } from '@/types/withdrawal';
import { useCallback, useEffect, useState } from 'react';

const WithdrawalMemberManagementTemplate = ({ list }: { list: WithdrawalMemberResponse }) => {
  const [pageNum, setPageNum] = useState(1);
  const [input, setInput] = useState('');
  const [lists, setLists] = useState(list.information.dataList);

  const handleWithdrawalSearch = useCallback(async () => {
    try {
      const response = await getWithdrawalSearch(pageNum, input);

      if (response) {
        setLists(response.information.dataList);
      } else {
        console.log('실패');
      }
    } catch (error) {
      console.error(error);
      console.log('오류가 발생했습니다.');
    }
  }, [input, pageNum]);

  useEffect(() => {
    setPageNum(1);
    handleWithdrawalSearch();
  }, [handleWithdrawalSearch, input]);

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
      <WithdrawalMemberManagementList list={lists} />
    </div>
  );
};

export default WithdrawalMemberManagementTemplate;
