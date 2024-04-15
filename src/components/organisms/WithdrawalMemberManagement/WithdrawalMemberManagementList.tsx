import React from 'react';
import WithdrawalMemberManagementListBody from './WithdrawalMemberManagementListBody';

type Props = {
  list: {
    index: number;
    name: string;
    schoolNumber: string;
    bonusPoint: number;
    minusPoint: number;
    date: string;
  }[];
};

const WithdrawalMemberManagementList = ({ list }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1090px]'>
        <tr>
          <th className='H4 w-[8%]'>번 호</th>
          <th className='H4 w-[22%]'>이 름</th>
          <th className='H4 w-[20%]'>학 번</th>
          <th className='H4 w-[20%]'>상 점</th>
          <th className='H4 w-[18%]'>벌 점</th>
          <th className='H4 w-[12%]'>탈퇴 날짜</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tbody className='block w-[1107px] h-677 overflow-y-auto scrollbar-table'>
        <tr className='h-15' />
        {list.map((data) => {
          return (
            <WithdrawalMemberManagementListBody
              key={data.index}
              index={data.index}
              name={data.name}
              schoolNumber={data.schoolNumber}
              bonusPoint={data.bonusPoint}
              minusPoint={data.minusPoint}
              date={data.date}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default WithdrawalMemberManagementList;
