'use client';

import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import Wave from '@public/images/Wave.png';
import Image from 'next/image';

type Props = {
  title: string;
  contents?: string;
  color: string;
  startDate: string;
  endDate: string;
  onDelete: () => void;
  onCancel: () => void;
  onEdit: () => void;
};

const CalendarPrompt = ({ title, contents, color, startDate, endDate, onCancel, onDelete, onEdit }: Props) => {
  return (
    <div className='flex flex-col items-start bg-white pt-40 pb-79 pl-71 pr-58 shadow1 rounded-8'>
      <h1 className='H1 mb-20'>기간</h1>
      <div className='flex items-center'>
        <input
          className='rounded-8 border border-gray-grayscale40 H4-caption outline-none px-14 py-5 text-gray-grayscale50 placeholder:text-gray-grayscale30'
          type='date'
          id='date'
          required
          readOnly
          value={startDate}
        />
        <Image src={Wave} width={18} height={6} alt='wave' className='mx-26' />
        <input
          className='rounded-8 border border-gray-grayscale40 H4-caption outline-none px-14 py-5 text-gray-grayscale50 placeholder:text-gray-grayscale30'
          type='date'
          id='date'
          required
          readOnly
          value={endDate}
        />
      </div>
      <h1 className='H1 mt-20 mb-12' style={{ color: color }}>
        {title}
      </h1>
      <div className='relative w-911 h-160'>
        <textarea
          className='resize-none H4 focus:outline-none rounded-8 w-full h-full border-1 border-gray-grayscale30 p-8'
          value={contents}
          spellCheck={false}
          readOnly
        />
      </div>
      <div className='absolute right-0 bottom-23'>
        <AlertBtn label={'삭제'} onClick={onDelete} hoverColor={'gray'} />
        <AlertBtn label={'취소'} onClick={onCancel} hoverColor={'gray'} />
        <AlertBtn label={'수정'} onClick={onEdit} hoverColor={'blue'} />
      </div>
    </div>
  );
};

export default CalendarPrompt;
