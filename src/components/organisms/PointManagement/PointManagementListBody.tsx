'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { selectedMemberIdForPoint } from '@/recoil';
import { PointMemberResponseDataList } from '@/types/pointManagement';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

export type Props = {
  index: number;
  data: PointMemberResponseDataList;
};

const PointManagementListBody = ({ index, data }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForPoint);
  const handleSetIsChecked = (isChecked: boolean) => {
    setIsChecked(isChecked);
    if (isChecked) {
      // 선택된 상태일 시 id를 recoil 배열에 추가
      setSelectedMemberId((prev) => (prev ? [...prev, data.id] : [data.id]));
    } else {
      // 선택 해제 상태일 시 id를 배열에서 제거
      setSelectedMemberId((prev) => prev?.filter((id) => id !== data.id) || null);
    }
  };
  console.log(selectedMemberId, isChecked);
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{data.name}</td>
      <td className='text-center'>{data.studentNumber}</td>
      <td className='text-center'>{data.studentNumber}</td>
      <td className='text-center'>{data.bonusPoint}</td>
      <td className='text-center'>{data.minusPoint}</td>
      <td className='text-center'>{data.dormitory}</td>
      <td className='text-center'>{data.room}</td>
      <td className='h-38 flex justify-center items-center my-auto'>
        <Checkbox isChecked={selectedMemberId.includes(data.id)} setIsChecked={handleSetIsChecked} />
      </td>
    </tr>
  );
};

export default PointManagementListBody;
