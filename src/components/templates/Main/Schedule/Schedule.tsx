'use client';

import { useMainTodaySchedule } from '@/apis/main';
import { schedules } from '@/constants/navigation';
import { formatDateByYMD, formatDay } from '@/utils/dateUtils';
import Link from 'next/link';
import React from 'react';
import ScheduleList from './ScheduleList';

const Schedule = () => {
  const { data, error, isLoading } = useMainTodaySchedule();

  return (
    <div className='font-pretendard w-485 h-501'>
      <div className='flex items-center justify-between mb-3'>
        <span className='font-semibold text-24 text-gray-grayscale40 pl-15'>오늘의 일정</span>
        <Link href={schedules} passHref>
          <span className='font-normal text-blue-blue40 text-17 underline'>바로가기</span>
        </Link>
      </div>
      <div className='w-full flex flex-col bg-gray-grayscale5 h-462 rounded-30 p-30'>
        <div className='font-medium text-20 text-gray-grayscale30 '>{formatDateByYMD()}</div>
        <div className='font-extrabold text-25 text-blue-blue30 mt-5 mb-34'>{formatDay()}</div>

        {isLoading ? (
          <div className='H2 text-gray-grayscale30  my-auto mx-auto'>로딩 중...</div>
        ) : error ? (
          <div className='H2 text-gray-grayscale30  my-auto mx-auto'>에러가 발생했습니다. 다시 시도해주세요.</div>
        ) : !data || data.information.length === 0 ? (
          <div className='H2 text-gray-grayscale30  my-auto mx-auto'>일정 없음</div>
        ) : (
          data.information.map((scheduleInfo, index) => {
            let scheduleColor;
            switch (scheduleInfo.color) {
              case 'GREY':
                scheduleColor = '#999999'; // GREY 색상 처리
                break;
              case 'RED':
                scheduleColor = '#D83636'; // RED 색상 처리
                break;
              case 'GREEN':
                scheduleColor = '#36D869'; // GREEN 색상 처리
                break;
              case 'YELLOW':
                scheduleColor = '#FFC92C'; // YELLOW 색상 처리
                break;
              case 'BLUE':
                scheduleColor = '#3678D8'; // BLUE 색상 처리
                break;
              default:
                scheduleColor = '#000'; // 기본 색상 처리
            }

            return (
              <ul className='mb-20' key={scheduleInfo.calendarId}>
                <ScheduleList scheduleColor={scheduleColor} schedule={scheduleInfo.title} />
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Schedule;
