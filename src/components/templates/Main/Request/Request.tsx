import { requests } from '@/constants/navigation';
import Link from 'next/link';
import React from 'react';
import RequestList from './RequestList';

const Request = () => {
  return (
    <div className='font-pretendard w-514 h-574'>
      <div className='flex items-center justify-between mb-3'>
        <span className='font-semibold text-24 text-gray-grayscale40 pl-15'>오늘의 일정</span>
        <Link href={requests} passHref>
          <span className='font-normal text-blue-blue40 text-17 underline'>바로가기</span>
        </Link>
      </div>
      <div className='w-full bg-white h-560 rounded-30  overflow-y-scroll'>
        {mockupData.map((i, index) => (
          <Link key={index} href={'/'} passHref>
            <ul className='mb-20 flex justify-center '>
              <RequestList content={i.content} date={i.date} />
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Request;
const mockupData = [
  {
    content: '안녕하세요 도미동 202호에서 거주하고 있는데 여자 화장실 왼쪽에서 3번째 칸의 문이 어제부터 잠겨있습니다.',
    date: '2024년 6월 15일',
  },
  {
    content: '안녕하세요 얼굴 등록을 했는데, 출입이 인식을 잘 못하는 것 같습니다. 얼굴 재 등록을 해주셨으면 합니다.',
    date: '2024년 6월 15일',
  },
  {
    content:
      '안녕하세요 사감님께 말씀드렸는데, 사무실에 연락드리라고 하셔서 연락드립니다. 왼쪽에서 두번째 세탁기가 고장났어요.',
    date: '2024년 6월 15일',
  },
  {
    content:
      '안녕하세요 사감님께 말씀드렸는데, 사무실에 연락드리라고 하셔서 연락드립니다. 왼쪽에서 두번째 세탁기가 고장났어요.',
    date: '2024년 6월 15일',
  },
  {
    content:
      '안녕하세요 사감님께 말씀드렸는데, 사무실에 연락드리라고 하셔서 연락드립니다. 왼쪽에서 두번째 세탁기가 고장났어요.',
    date: '2024년 6월 15일',
  },
  {
    content:
      '안녕하세요 사감님께 말씀드렸는데, 사무실에 연락드리라고 하셔서 연락드립니다. 왼쪽에서 두번째 세탁기가 고장났어요.',
    date: '2024년 6월 15일',
  },
  {
    content:
      '안녕하세요 사감님께 말씀드렸는데, 사무실에 연락드리라고 하셔서 연락드립니다. 왼쪽에서 두번째 세탁기가 고장났어요.',
    date: '2024년 6월 15일',
  },
];
