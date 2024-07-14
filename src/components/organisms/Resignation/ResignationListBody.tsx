import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { ResignationListResponseDataList } from '@/types/resignation';
import { useRouter } from 'next/navigation';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { formatCreateDate } from '../FormatCreateDate/FormatCreateDate';
import { useSetRecoilState } from 'recoil';
import { resignationIdState } from '@/recoil/resignation';

type Props = ResignationListResponseDataList & {
  isChecked: boolean;
  handleCheckboxChange: (id: number) => void;
};

const ResignationListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  {
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
  }: Props,
  ref,
) => {
  const router = useRouter();
  const setId = useSetRecoilState(resignationIdState);

  return (
    <>
      <tr
        ref={ref}
        className={`table rounded-5 w-[1200px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${isChecked ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => {
          setId(exitRequestmentId);
          router.push(`/dashboard/JoinApplicationSetting/Resignation/Detail`);
        }}
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
        <td className='w-[8%]' onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={() => handleCheckboxChange(exitRequestmentId)} />
          </div>
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(ResignationListBody);
