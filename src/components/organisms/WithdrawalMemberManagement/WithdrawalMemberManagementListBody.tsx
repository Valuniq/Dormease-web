import React from 'react';

type Props = {
  index: number;
  name: string;
  schoolNumber: string;
  bonusPoint: number;
  minusPoint: number;
  date: string;
};

const WithdrawalMemberManagementListBody = ({ index, name, schoolNumber, bonusPoint, minusPoint, date }: Props) => {
  return (
    <>
      <tr className='table rounded-5 w-full H4-caption h-38 text-nowrap relative align-middle cursor-pointer'>
        <td className='w-[8%]'>{index}</td>
        <td className='w-[22%]'>{name}</td>
        <td className='w-[20%]'>{schoolNumber}</td>
        <td className='w-[17%]'>{bonusPoint}</td>
        <td className='w-[18%]'>{minusPoint}</td>
        <td className='w-[15%]'>{date}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default WithdrawalMemberManagementListBody;
