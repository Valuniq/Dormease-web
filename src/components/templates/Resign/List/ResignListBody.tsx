import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import { ResignListResponseDataList } from '@/types/resign';
import { useRouter } from 'next/navigation';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { formatCreateDate } from '../../../organisms/FormatCreateDate/FormatCreateDate';
import { useSetRecoilState } from 'recoil';
import { resignIdState } from '@/recoil/resign';

type Props = {
  isChecked: boolean;
  handleCheckboxChange: (id: number) => void;
  item: ResignListResponseDataList;
};

const ResignListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { isChecked, handleCheckboxChange, item }: Props,
  ref,
) => {
  const router = useRouter();
  const setId = useSetRecoilState(resignIdState);

  return (
    <>
      <tr
        ref={ref}
        className={`table rounded-5 w-[1200px] H4-caption h-38 text-nowrap align-middle cursor-pointer ${isChecked ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
        onClick={() => {
          setId(item.exitRequestmentId);
          router.push(`/dashboard/join/resigns/details`);
        }}
      >
        <td className='w-[10%]'>{item.residentName}</td>
        <td className='w-[12%]'>{item.studentNumber}</td>
        <td className='w-[17%]'>{item.dormitoryName}</td>
        <td className='w-[9%]'>{item.roomNumber}</td>
        <td className='w-[12%]'>{formatCreateDate(item.exitDate)}</td>
        <td className='w-[10%]'>{item.hasKey ? 'O' : '-'}</td>
        <td className='w-[12%]'>{formatCreateDate(item.createDate)}</td>
        <td className='w-[10%]'>
          {item.securityDepositReturnStatus === 'PAYMENT'
            ? '지급'
            : item.securityDepositReturnStatus === 'UNALBE'
              ? '지급 불가'
              : '미지급'}
        </td>
        <td className='w-[8%]' onClick={(e) => e.stopPropagation()}>
          <div className='flex justify-center items-center'>
            <Checkbox isChecked={isChecked} setIsChecked={() => handleCheckboxChange(item.exitRequestmentId)} />
          </div>
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(ResignListBody);
