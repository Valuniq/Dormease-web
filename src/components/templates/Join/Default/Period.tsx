'use client';

import { todayDate } from '@/utils/dateUtils';
import React from 'react';

type Props = {
  label: '입사 신청 기간' | '입금 가능 기간';
  input: { startDate: string; endDate: string };
  setInput: (input: { startDate: string; endDate: string }) => void;
};

const Period = ({ label, input, setInput }: Props) => {
  return (
    <div className='flex items-center justify-between H4 text-gray-grayscale50'>
      <h1 className='mr-21'>{label}</h1>
      <div className='w-360 flex items-center justify-between'>
        {/* 시작 날짜 입력 */}
        <input
          type='date'
          value={input.startDate}
          onChange={(e) => {
            setInput({ ...input, startDate: e.target.value });
          }}
          min={todayDate} // 최소 날짜를 오늘 날짜로 설정
          max={input.endDate} // 마감 날짜보다 늦을 수 없음
          className={`${input.startDate ? 'border-gray-grayscale50' : 'border-gray-grayscale30'} w-160 H4-caption border-[0.5px] outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
        />
        ~{/* 마감 날짜 입력 */}
        <input
          type='date'
          value={input.endDate}
          onChange={(e) => {
            setInput({ ...input, endDate: e.target.value });
          }}
          min={input.startDate || todayDate} // 시작 날짜보다 이를 수 없음
          className={`${input.endDate ? 'border-gray-grayscale50' : 'border-gray-grayscale30'} w-160 H4-caption border-[0.5px] outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
        />
      </div>
    </div>
  );
};

export default Period;
