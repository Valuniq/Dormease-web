'use client';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import React from 'react';

const JoinApplicationSettingList = () => {
  return (
    <table className='w-full table-auto align-center '>
      <thead className='H4 text-gray-grayscale50 border-y-1 border-y-gray-grayscale50'>
        <tr>
          <th className='px-4 py-2'>제 목</th>
          <th className='px-4 py-2'>시작일시</th>
          <th className='px-4 py-2'>마감일시</th>
          <th className='px-4 py-2'></th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {Array(3)
          .fill('')
          .map((_, index) => (
            <tr key={index} className='mb-8'>
              <td className=' px-4 py-2'>2024-1학기 명지대학교 사생 생활관 지원서 접수 안내</td>
              <td className=' px-4 py-2'>24:00:00</td>
              <td className=' px-4 py-2'>24:00:00</td>
              <td className=' px-4 py-2'>
                <BtnLargeVariant label={'가져오기'} disabled={false} variant={'blue'} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default JoinApplicationSettingList;
