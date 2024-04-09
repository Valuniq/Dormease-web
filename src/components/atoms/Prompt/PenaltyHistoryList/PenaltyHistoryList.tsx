import { ManifestChunks } from 'next/dist/build/webpack/plugins/flight-manifest-plugin';
import React from 'react';
import Checkbox from '../../AllBtn/Checkbox/Checkbox';

type Props = {
  date: string;
  reason: string;
  score: string;
  division: 'plus' | 'minus';
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const PenaltyHistoryList = ({ date, reason, score, division, isChecked, setIsChecked }: Props) => {
  return (
    <>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale30'>{date}</h1>
      </td>
      <td className='w-260 border-b-1 border-b-gray-grayscale50'>
        <h1 className='H4 text-gray-grayscale50'>{reason}</h1>
      </td>
      <td className='text-center'>
        <h1 className='H4 text-gray-grayscale50'>{score}점</h1>
      </td>
      <td className='text-center'>
        <h1 className={`${division === 'minus' ? 'text-red-red20' : 'text-green-green20'} H4 `}>
          {division === 'minus' ? '벌 점' : '상 점'}
        </h1>
      </td>
      <td>
        <div className='ml-28'>
          <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
      </td>
    </>
  );
};

export default PenaltyHistoryList;
