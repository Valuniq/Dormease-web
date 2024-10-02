'use client';

import { noticesDetailRoutes, noticesWritingRoutes } from '@/constants/navigation';
import Link from 'next/link';
import React from 'react';
import Edit from '@public/images/Edit.png';
import Image from 'next/image';
import NoticeList from './NoticeList';
import { useMainNotice } from '@/apis/main';
import { noticeIdState } from '@/recoil/notice';
import { useSetRecoilState } from 'recoil';

const Notice = () => {
  const { data, isLoading, error } = useMainNotice();
  const setNoticeId = useSetRecoilState(noticeIdState);

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
      <div className=' w-full flex justify-center overflow-scroll bg-gray-grayscale5 h-560 rounded-30 p-30'>
        {isLoading ? (
          <div className='H2 text-gray-grayscale30 mx-auto my-auto'>로딩 중...</div>
        ) : error ? (
          <div className='H2 text-red-red30  mx-auto my-auto'>에러가 발생했습니다. 다시 시도해주세요.</div>
        ) : !data || data.information.length === 0 ? (
          <div className='H2 text-gray-grayscale30  mx-auto my-auto'>공지사항이 없습니다.</div>
        ) : (
          data.information.map((i) => (
            <Link key={i.notificationId} href={noticesDetailRoutes} passHref>
              <ul
                className='hover-transition hover:opacity-80 cursor-pointer '
                onClick={() => {
                  setNoticeId(i.notificationId);
                }}
              >
                <NoticeList content={i.title} date={i.createdDate} />
              </ul>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Notice;
