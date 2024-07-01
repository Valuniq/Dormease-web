import React from 'react';
import WithdrawalMemberManagementListBody from './WithdrawalMemberManagementListBody';
import NoneList from '../NoneList/NoneList';
import { WithdrawalMemberResponseDataList } from '@/types/withdrawal';

type Props = {
  list: WithdrawalMemberResponseDataList[];
};

const WithdrawalMemberManagementList = ({ list }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1090px]'>
        <tr>
          <th className='H4 w-[8%]'>번 호</th>
          <th className='H4 w-[22%]'>이 름</th>
          <th className='H4 w-[20%]'>학 번</th>
          <th className='H4 w-[17%]'>상 점</th>
          <th className='H4 w-[18%]'>벌 점</th>
          <th className='H4 w-[15%]'>탈퇴 날짜</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tbody className='w-[1104px] block h-677 overflow-y-auto scrollbar-table'>
        {list ? (
          <>
            <tr className='h-15' />
            {list.map((data) => {
              return (
                <WithdrawalMemberManagementListBody
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  studentNumber={data.studentNumber}
                  bonusPoint={data.bonusPoint}
                  minusPoint={data.minusPoint}
                  deletedAt={data.deletedAt}
                />
              );
            })}
          </>
        ) : (
          <NoneList />
        )}
      </tbody>
    </table>
  );
};

export default WithdrawalMemberManagementList;
