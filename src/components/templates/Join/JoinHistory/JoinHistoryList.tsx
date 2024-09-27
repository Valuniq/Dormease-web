'use client';
import { useGetJoinThreeLists } from '@/apis/join';
import React from 'react';
import JoinHistoryListBody from './JoinHistoryListBody';

const JoinApplicationSettingList = () => {
  const { data, error, isLoading } = useGetJoinThreeLists();

  return (
    <table className='w-full h-192 align-center '>
      <thead className='H4 text-gray-grayscale50 border-y-1 border-y-gray-grayscale50'>
        <tr>
          <th className='px-4 py-2'>제 목</th>
          <th className='px-4 py-2'>시작일시</th>
          <th className='px-4 py-2'>마감일시</th>
          <th className='px-4 py-2'></th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <th colSpan={4}>
            <div className='w-full h-8' />
          </th>
        </tr>

        {/* 로딩 중일 때 */}
        {isLoading ? (
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan={4}>Error loading data.</td>
          </tr>
        ) : data?.length === 0 ? (
          // 데이터가 없을 때 NoneList 컴포넌트 표시
          <td colSpan={4} className='h-full'>
            <div className='flex justify-center items-center h-full'>
              <h1 className='H1 text-gray-grayscale30'>리스트가 비었습니다.</h1>
            </div>
          </td>
        ) : (
          // 데이터가 있을 때 테이블에 데이터 표시
          data?.map((i, index) => (
            <JoinHistoryListBody
              index={index}
              title={i.title}
              startDate={i.startDate}
              endDate={i.endDate}
              getList={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default JoinApplicationSettingList;
