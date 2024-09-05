'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { selectedMemberIdForPointState } from '@/recoil';
import { PointMemberResponseDataList } from '@/types/point';
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { useRecoilState } from 'recoil';

export type Props = {
  index: number;
  data: PointMemberResponseDataList;
  onClick: () => void;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const PointListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { index, data, onClick, isChecked, setIsChecked },
  ref,
) => {
  return (
    <tr
      ref={ref}
      onClick={onClick}
      className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'
    >
      <td className='text-center'>{index}</td>
      <td className='text-center'>{data.name}</td>
      <td className='text-center'>{data.studentNumber}</td>
      <td className='text-center'>{data.studentNumber}</td>
      <td className='text-center'>{data.bonusPoint}</td>
      <td className='text-center'>{data.minusPoint}</td>
      <td className='text-center'>{data.dormitory}</td>
      <td className='text-center'>{data.room}</td>
      <td className='h-38 flex justify-center items-center my-auto'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </tr>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(PointListBody);
