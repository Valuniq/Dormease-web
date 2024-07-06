import { WithdrawalMemberResponseDataList } from '@/types/withdrawal';
import React from 'react';

const WithdrawalMemberManagementListBody = ({
  index,
  name,
  studentNumber,
  bonusPoint,
  minusPoint,
  deletedAt,
}: WithdrawalMemberResponseDataList & { index: number }) => {
  return (
    <>
      <tr className='table rounded-5 w-[1090px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer'>
        <td className='w-[8%]'>{index + 1}</td>
        <td className='w-[22%]'>{name}</td>
        <td className='w-[20%]'>{studentNumber}</td>
        <td className='w-[17%]'>{bonusPoint}</td>
        <td className='w-[18%]'>{minusPoint}</td>
        <td className='w-[15%]'>{deletedAt}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default WithdrawalMemberManagementListBody;
