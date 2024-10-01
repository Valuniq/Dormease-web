import { schedules } from '@/constants/navigation';
import Link from 'next/link';
import React from 'react';
import ScheduleList from './ScheduleList';

const mockupData = [
  {
    scheduleColor: '#3678D8',
    schedule: '오후 2시 세탁기 업체 미팅',
  },
  {
    scheduleColor: '#36d869',
    schedule: '2024년 여름학기 기숙사 1차 신청',
  },
  {
    scheduleColor: '#d83636',
    schedule: '2024년 1학기 퇴사확인서 제출 기간',
  },
];

const Schedule = () => {
  return (
    <div className='font-pretendard w-485 h-501'>
      <div className='flex items-center justify-between mb-3'>
        <span className='font-semibold text-24 text-gray-grayscale40 pl-15'>오늘의 일정</span>
        <Link href={schedules} passHref>
          <span className='font-normal text-blue-blue40 text-17 underline'>바로가기</span>
        </Link>
      </div>
      <div className='w-full bg-gray-grayscale5 h-462 rounded-30 p-30'>
        <div className='font-medium text-20 text-gray-grayscale30 '>2024년 12월 31일</div>
        <div className='font-extrabold text-25 text-blue-blue30 mt-5 mb-34'>오늘은 수요일입니다.</div>
        {mockupData.map((i, key) => (
          <ul className='mb-20' key={key}>
            <ScheduleList scheduleColor={i.scheduleColor} schedule={i.schedule} />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
