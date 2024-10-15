'use client';

import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import { CalendarDetailResponseInformation, colorList } from '@/types/schedule';
import Wave from '@public/images/Wave.png';
import Image from 'next/image';
import BuildingOutBtn from '@public/images/BuildingOutBtn.svg';

type Props = {
  item: CalendarDetailResponseInformation;
  onDelete: (id: number) => void;
  onCancel: () => void;
  onEdit: () => void;
};

const CalendarPrompt = ({ item, onCancel, onDelete, onEdit }: Props) => {
  return (
    <div className='flex flex-col items-start bg-white pt-40 pb-79 pl-71 pr-58 shadow1 rounded-8'>
      <BuildingOutBtn className='absolute top-16 right-16 cursor-pointer' onClick={onCancel} />
      <h1 className='H1 mb-20'>기간</h1>
      <div className='flex items-center'>
        <input
          className='rounded-8 border border-gray-grayscale40 H4-caption outline-none px-14 py-5 text-gray-grayscale50 placeholder:text-gray-grayscale30'
          type='date'
          id='date'
          required
          readOnly
          value={item.startDate}
        />
        {item.startDate !== item.endDate && (
          <>
            <Image src={Wave} width={18} height={6} alt='wave' className='mx-26' />
            <input
              className='rounded-8 border border-gray-grayscale40 H4-caption outline-none px-14 py-5 text-gray-grayscale50 placeholder:text-gray-grayscale30'
              type='date'
              id='date'
              required
              readOnly
              value={item.endDate}
            />
          </>
        )}
      </div>
      <div className='flex items-center gap-10 mt-20 mb-12'>
        <div className='w-12 h-12 rounded-30' style={{ backgroundColor: colorList[item.color] }}></div>
        <h1 className='H1 text-gray-grayscale50'>{item.title}</h1>
      </div>
      <div className='relative w-911 h-160'>
        <textarea
          className='resize-none H4 focus:outline-none rounded-8 w-full h-full border-1 border-gray-grayscale30 p-8'
          value={item.content}
          spellCheck={false}
          readOnly
        />
      </div>
      <div className='absolute right-0 bottom-23'>
        <AlertBtn label={'삭제'} onClick={() => onDelete(item.calendarId)} hoverColor={'red'} />
        <AlertBtn label={'취소'} onClick={onCancel} hoverColor={'gray'} />
        <AlertBtn label={'수정'} onClick={onEdit} hoverColor={'blue'} />
      </div>
    </div>
  );
};

export default CalendarPrompt;
