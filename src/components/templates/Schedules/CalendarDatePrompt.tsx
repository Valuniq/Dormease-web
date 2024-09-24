import React from 'react';
import EventPlus from '@public/images/EventPlus.svg';
import BuildingOutBtn from '@public/images/BuildingOutBtn.svg';
import { colorList, TDateResponse } from '@/types/schedule';

type Props = {
  date: string;
  item: TDateResponse[];
  onCancel: () => void;
  onCreate: () => void;
  onDetail: (id: number) => void;
};

const CalendarDatePrompt = ({ date, item, onCancel, onCreate, onDetail }: Props) => {
  const [year, month, day] = date.split('-');

  return (
    <div className='w-574 h-470 bg-white rounded-30 p-10'>
      <div className='flex items-center h-93 bg-gray-grayscale5 rounded-20 relative mb-10'>
        <h1 className='H1 text-blue-blue30 pl-21 pr-14'>일정</h1>
        <h4 className='H4 text-gray-grayscale30'>
          {year}년 {month}월 {day}일
        </h4>
        <BuildingOutBtn onClick={onCancel} className='absolute top-6 right-6 cursor-pointer' />
      </div>
      <div className='bg-gray-grayscale5 rounded-20 p-8 h-347 flex flex-col gap-15 overflow-y-auto noscrollbar-table'>
        {item.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => onDetail(data.calendarId)}
              className='flex items-center py-5 px-13 gap-14 cursor-pointer rounded-12 max-w-[428px] hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
            >
              <div
                className={`min-w-14 min-h-14 rounded-100 ${colorList.find((color) => color.name === data.color)?.value}`}
              ></div>
              <h4 className='H4 text-gray-grayscale50 truncate'>{data.title}</h4>
            </div>
          );
        })}
      </div>
      <div className='absolute bottom-34 right-34 cursor-pointer' onClick={onCreate}>
        <h4 className='H4 text-blue-blue30 mb-7 text-center'>일정추가</h4>
        <div className='w-82 h-82 bg-blue-blue30 hover:bg-blue-blue40 rounded-100 flex justify-center items-center'>
          <EventPlus />
        </div>
      </div>
    </div>
  );
};

export default CalendarDatePrompt;
