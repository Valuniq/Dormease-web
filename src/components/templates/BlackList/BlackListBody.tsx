'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import BlackListReasonInputText from '@/components/atoms/InputText/BlackListReasonInputText/BlackListReasonInputText';
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react';

export type Props = {
  id: number;
  index: number;
  name: string;
  studentId: string;
  phoneNumber: string;
  minus: number;
  content: string;
  registrationDate: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const BlackListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { index, name, studentId, phoneNumber, minus, registrationDate, content, isChecked, setIsChecked },
  ref, // 부모 컴포넌트로부터 전달받은 ref
) => {
  const [reason, setReason] = useState(content);

  return (
    <tr
      ref={ref} // 부모 컴포넌트로부터 전달받은 ref를 DOM 요소에 연결
      className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'
    >
      <td className='text-center'>{index}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{phoneNumber}</td>
      <td className='text-center'>{minus}점</td>
      <td className='text-center'>
        <BlackListReasonInputText input={reason} setInput={setReason} />
      </td>
      <td className='text-center'>{registrationDate}</td>
      <td className='h-38 flex justify-center items-center my-auto'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </tr>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(BlackListBody);
