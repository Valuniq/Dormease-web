import { joinsRoutes } from '@/constants/navigation';
import Link from 'next/link';
import React from 'react';
import RefundList from './RefundList';

const Refund = () => {
  return (
    <div className='font-pretendard w-514 h-574'>
      <div className='flex items-center justify-between mb-3'>
        <span className='font-semibold text-24 text-gray-grayscale40 pl-15'>환불 신청</span>
        <Link href={`${joinsRoutes}/refunds`} passHref>
          <span className='font-normal text-blue-blue40 text-17 underline'>바로가기</span>
        </Link>
      </div>
      <div className='w-full bg-white h-560 rounded-30  overflow-y-scroll shadow3 p-8'>
        <div className='mb-8 w-473 h-52 rounded-22 bg-blue-blue15 flex items-center text-center font-pretendard font-normal text-18 text-blue-blue30'>
          <div className='flex-1'>이름</div> <div className='flex-1'>학번</div> <div className='flex-1'>호실</div>{' '}
          <div className='flex-1'>일자</div>
        </div>
        {mockupData.map((i, index) => (
          <ul className='mb-8' key={index}>
            <RefundList name={i.name} studentId={i.studentId} dorm={i.dorm} date={i.date} />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Refund;

const mockupData = [
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
  {
    name: '정지수',
    studentId: '50104134',
    dorm: '도미동/402호',
    date: '2024.24.24',
  },
];
