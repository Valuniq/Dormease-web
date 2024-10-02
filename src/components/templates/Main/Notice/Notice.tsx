import { noticesWritingRoutes } from '@/constants/navigation';
import Link from 'next/link';
import React from 'react';
import Edit from '@public/images/Edit.png';
import Image from 'next/image';
import NoticeList from './NoticeList';

const Notice = () => {
  return (
    <div className='font-pretendard w-485 h-574'>
      <div className='flex items-center justify-between mb-3'>
        <span className='font-semibold text-24 text-gray-grayscale40 pl-15'>공지사항</span>
        <Link href={noticesWritingRoutes} passHref>
          <div className='font-normal text-blue-blue40 text-17 underline flex items-center'>
            <Image src={Edit} alt='edit' width={24} height={24} className='object-contain mr-18' />
            작성하기
          </div>
        </Link>
      </div>
      <div className='w-full overflow-scroll bg-gray-grayscale5 h-560  rounded-30 p-30'>
        {mockupData.map((i, index) => (
          <ul key={index}>
            <NoticeList content={i.title} date={i.date} />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Notice;

const mockupData = [
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
  {
    title: '2024-1 여름학기 1차 기숙사생 신청',
    date: '24.12.31',
  },
];
