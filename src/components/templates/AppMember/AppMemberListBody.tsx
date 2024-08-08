'use client';

import React, { forwardRef, ForwardRefRenderFunction } from 'react';

type Props = {
  index: number;
  id: number;
  name: string;
  studentNumber: string;
  phoneNumber: string;
  bonusPoint: number;
  minusPoint: number;
  createdAt: string;
};

const AppMemberListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { index, id, name, studentNumber, phoneNumber, bonusPoint, minusPoint, createdAt },
  ref,
) => {
  return (
    <tr
      ref={ref}
      className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'
    >
      <td className='text-center'>{index}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentNumber}</td>
      <td className='text-center'>{phoneNumber}</td>
      <td className='text-center'>{bonusPoint}</td>
      <td className='text-center'>{minusPoint}</td>
      <td className='text-center'>{createdAt}</td>
    </tr>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(AppMemberListBody);
