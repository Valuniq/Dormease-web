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
    <>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{index}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{name}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{studentId}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{phoneNumber}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{minus}점</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>
          {isEdit ? (
            <BlackListReasonInputText input={reason} setInput={setReason} />
          ) : (
            <BlackListReasonInputText input={reason} />
          )}
        </h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{registrationDate}</h1>
      </td>
      <td className='flex justify-center'>
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </td>
    </>
  );
};

export default BlackListBody;
