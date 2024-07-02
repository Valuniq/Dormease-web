import React from 'react';

type Props = {
  index: number;
  requestmentId: number;
  title: string;
  writer: string;
  createdDate: string;
  progression: 'IN_REVIEW' | 'IN_PROGRESS' | 'ANSWER_COMPLETED';
  onRequestClick: (requestmentId: number) => void;
};

const RequestListBody = ({ index, requestmentId, title, writer, createdDate, progression, onRequestClick }: Props) => {
  return (
    <>
      <tr
        className='table rounded-5 w-[1200px] H4-caption h-38 align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
        onClick={() => onRequestClick(requestmentId)}
      >
        <td className='w-[8%]'>{index + 1}</td>
        <td className='w-[56%] truncate max-w-500'>{title}</td>
        <td className='w-[11%]'>{writer}</td>
        <td className='w-[17%]'>{createdDate}</td>
        <td className='w-[8%]'>
          {progression === 'IN_REVIEW' ? '검토중' : progression === 'ANSWER_COMPLETED' ? '완료됨' : '진행중'}
        </td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default RequestListBody;
