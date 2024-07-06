import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { ResignationListResponseDataList } from '@/types/resignation';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = ResignationListResponseDataList & {
  isChecked: boolean;
  handleCheckboxChange: (id: number) => void;
};

const ResignationListBody = ({
  exitRequestmentId,
  residentName,
  studentNumber,
  dormitoryName,
  roomNumber,
  exitDate,
  hasKey,
  createDate,
  securityDepositReturnStatus,
  isChecked,
  handleCheckboxChange,
}: Props) => {
  const router = useRouter();

  //날짜 변환
  const formatCreateDate = (date: string): string => {
    let formattedDate = date.startsWith('20') ? date.slice(2) : date;
    formattedDate = formattedDate.replace(/-/g, '.');
    return formattedDate;
  };

  return (
    <>
      <tr
        className={`table rounded-5 w-[1200px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${isChecked ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => router.push(`/dashboard/JoinApplicationSetting/Resignation/${exitRequestmentId}`)}
      >
        <td className='w-[10%]'>{residentName}</td>
        <td className='w-[12%]'>{studentNumber}</td>
        <td className='w-[17%]'>{dormitoryName}</td>
        <td className='w-[9%]'>{roomNumber}</td>
        <td className='w-[12%]'>{formatCreateDate(exitDate)}</td>
        <td className='w-[10%]'>{hasKey ? 'O' : '-'}</td>
        <td className='w-[12%]'>{formatCreateDate(createDate)}</td>
        <td className='w-[10%]'>
          {securityDepositReturnStatus === 'PAYMENT'
            ? '지급'
            : securityDepositReturnStatus === 'UNALBE'
              ? '지급 불가'
              : '미지급'}
        </td>
        <td className='w-[8%]'>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={() => handleCheckboxChange(exitRequestmentId)} />
          </div>
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default ResignationListBody;
