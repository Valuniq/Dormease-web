import React from 'react';

type Props = {
  scheduleColor: string;
  schedule: string;
};

const ScheduleList = ({ scheduleColor, schedule }: Props) => {
  return (
    <div className='flex items-center'>
      <div className='w-14 h-14 rounded-[50%] mr-13' style={{ backgroundColor: scheduleColor }}></div>
      <span className='font-pretendard font-normal text-22 text-gray-grayscale50 '>{schedule}</span>
    </div>
  );
};

export default ScheduleList;
