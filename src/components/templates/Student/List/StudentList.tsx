'use client';
import React from 'react';
import StudentListBody from './StudentListBody';
import NoneList from '../../../organisms/NoneList/NoneList';
import { StudentListResponseDataList } from '@/types/student';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import SortableHeader from './SortableHeader';

type Props = {
  list: StudentListResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  isAscending: boolean;
  setIsAscending: React.Dispatch<React.SetStateAction<boolean>>;
};

const StudentList = ({
  list,
  isLoading,
  isEndReached,
  setSize,
  sortBy,
  setSortBy,
  isAscending,
  setIsAscending,
}: Props) => {
  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1200px]'>
        <tr>
          <th className='H4 w-[5%]'>번 호</th>
          <th className='H4 w-[13%]'>이 름</th>
          <th className='H4 w-[13%]'>학 번</th>
          <th className='H4 w-[13%]'>
            <SortableHeader
              title='성 별'
              sortBy={sortBy}
              setSortBy={setSortBy}
              isAscending={isAscending}
              setIsAscending={setIsAscending}
              sortKey='gender'
            />
          </th>
          <th className='H4 w-[15%]'>
            <SortableHeader
              title='건 물'
              sortBy={sortBy}
              setSortBy={setSortBy}
              isAscending={isAscending}
              setIsAscending={setIsAscending}
              sortKey='dormitory'
            />
          </th>
          <th className='H4 w-[13%]'>호 실</th>
          <th className='H4 w-[10%]'>
            <SortableHeader
              title='상 점'
              sortBy={sortBy}
              setSortBy={setSortBy}
              isAscending={isAscending}
              setIsAscending={setIsAscending}
              sortKey='bonusPoint'
            />
          </th>
          <th className='H4 relative w-[10%]'>
            <SortableHeader
              title='벌 점'
              sortBy={sortBy}
              setSortBy={setSortBy}
              isAscending={isAscending}
              setIsAscending={setIsAscending}
              sortKey='minusPoint'
            />
          </th>
          <th className='H4 w-[8%]'>학 적</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      {list && list.length > 0 ? (
        <tbody className='w-[1214px] block h-677 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data, index) => {
            return <StudentListBody key={index} index={index} list={data} ref={lastElementRef} />;
          })}
        </tbody>
      ) : isLoading ? (
        <tbody className='h-677'></tbody>
      ) : (
        <tbody className='h-677'>
          <NoneList colspan={9} />
        </tbody>
      )}
    </table>
  );
};

export default StudentList;
