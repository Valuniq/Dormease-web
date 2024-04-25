import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import BlackListReasonInputText from '@/components/atoms/InputText/BlackListReasonInputText/BlackListReasonInputText';
import React from 'react';

export type Props = {
  index: string;
  name: string;
  studentId: string;
  phoneNumber: string;
  minus: string;
  reason: string;
  setReason: (reason: string) => void;
  registrationDate: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  isEdit: boolean;
};
const BlackListBody = ({
  index,
  name,
  studentId,
  phoneNumber,
  minus,
  reason,
  setReason,
  registrationDate,
  isChecked,
  setIsChecked,
  isEdit,
}: Props) => {
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{index}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{phoneNumber}</td>
      <td className='text-center'>{minus}점</td>
      <td className='text-center'>
        {isEdit ? (
          <BlackListReasonInputText input={reason} setInput={setReason} />
        ) : (
          <BlackListReasonInputText input={reason} />
        )}
      </td>
      <td className='text-center'>{registrationDate}</td>
      <td className='flex justify-center'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </tr>
  );
};

export default BlackListBody;
