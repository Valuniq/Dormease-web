import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';

type Props = {
  name: string;
  schoolNumber: string;
  building: string;
  roomNumber: string;
  exitDate: string;
  hasKey: boolean;
  submissionDate: string;
  depositRefund: boolean;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  onStudentClick: (schoolNumber: string) => void;
};

const ResignationListBody = ({
  name,
  schoolNumber,
  building,
  roomNumber,
  exitDate,
  hasKey,
  submissionDate,
  depositRefund,
  isChecked,
  setIsChecked,
  onStudentClick,
}: Props) => {
  return (
    <>
      <tr
        className={`table rounded-5 w-full H4-caption h-38 text-nowrap align-middle cursor-pointer ${isChecked ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => onStudentClick(schoolNumber)}
      >
        <td className='w-[10%]'>{name}</td>
        <td className='w-[12%]'>{schoolNumber}</td>
        <td className='w-[17%]'>{building}</td>
        <td className='w-[9%]'>{roomNumber}</td>
        <td className='w-[12%]'>{exitDate}</td>
        <td className='w-[10%]'>{hasKey ? 'O' : 'X'}</td>
        <td className='w-[12%]'>{submissionDate}</td>
        <td className='w-[10%]'>{depositRefund ? '지급' : '미지급'}</td>
        <td className='w-[8%]'>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default ResignationListBody;
