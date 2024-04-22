import React from 'react';

type Props = {
  index: number;
  title: string;
  name: string;
  date: string;
  progression: string;
  onRequestClick: (index: number) => void;
};

const RequestListBody = ({ index, title, name, date, progression, onRequestClick }: Props) => {
  return (
    <>
      <tr
        className='table rounded-5 w-full H4-caption h-38 align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
        onClick={() => onRequestClick(index)}
      >
        <td className='w-[8%]'>{index}</td>
        <td className='w-[56%] truncate max-w-500'>{title}</td>
        <td className='w-[11%]'>{name}</td>
        <td className='w-[17%]'>{date}</td>
        <td className='w-[8%]'>{progression}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default RequestListBody;
