import { RequestListResponseDataList } from '@/types/request';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { formatCreateDate } from '../../organisms/FormatCreateDate/FormatCreateDate';

type Props = {
  index: number;
  onRequestClick: (requestmentId: number) => void;
  item: RequestListResponseDataList;
};

const RequestListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = (
  { index, onRequestClick, item },
  ref,
) => {
  return (
    <>
      <tr
        ref={ref}
        className='table rounded-5 w-[1200px] H4-caption h-38 align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
        onClick={() => onRequestClick(item.requestmentId)}
      >
        <td className='w-[8%]'>{index + 1}</td>
        <td className='w-[56%] truncate max-w-500'>{item.title}</td>
        <td className='w-[11%]'>{item.writer}</td>
        <td className='w-[17%]'>{formatCreateDate(item.createdDate)}</td>
        <td className='w-[8%]'>
          {item.progression === 'IN_REVIEW' ? '검토중' : item.progression === 'ANSWER_COMPLETED' ? '완료됨' : '진행중'}
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(RequestListBody);
