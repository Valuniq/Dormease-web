import { WithdrawalMemberResponseDataList } from '@/types/withdrawal';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';

type Props = WithdrawalMemberResponseDataList & { index: number };

const WithdrawalMemberManagementListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { index, name, studentNumber, bonusPoint, minusPoint, deletedAt },
  ref,
) => {
  return (
    <>
      <tr
        ref={ref}
        className='table rounded-5 w-[1090px] H4-caption h-38 text-nowrap relative align-middle cursor-pointer'
      >
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

export default forwardRef<HTMLTableRowElement, Props>(WithdrawalMemberManagementListBody);
