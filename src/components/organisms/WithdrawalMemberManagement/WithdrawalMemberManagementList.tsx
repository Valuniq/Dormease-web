import React from 'react';
import WithdrawalMemberManagementListBody from './WithdrawalMemberManagementListBody';
import NoneList from '../NoneList/NoneList';
import { WithdrawalMemberResponseDataList } from '@/types/withdrawal';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

type Props = {
  list: WithdrawalMemberResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const WithdrawalMemberManagementList = ({ list, isLoading, isEndReached, setSize }: Props) => {
  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1090px]'>
        <tr>
          <th className='H4 w-[8%]'>번 호</th>
          <th className='H4 w-[22%]'>이 름</th>
          <th className='H4 w-[20%]'>학 번</th>
          <th className='H4 w-[17%]'>상 점</th>
          <th className='H4 w-[18%]'>벌 점</th>
          <th className='H4 w-[15%]'>탈퇴 날짜</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      {list && list.length > 0 ? (
        <tbody className='w-[1104px] block h-677 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data, index) => {
            if (index === list.length - 1) {
              return (
                <WithdrawalMemberManagementListBody
                  key={index}
                  id={data.id}
                  index={index}
                  name={data.name}
                  studentNumber={data.studentNumber}
                  bonusPoint={data.bonusPoint}
                  minusPoint={data.minusPoint}
                  deletedAt={data.deletedAt}
                  ref={lastElementRef}
                />
              );
            } else {
              return (
                <WithdrawalMemberManagementListBody
                  key={index}
                  id={data.id}
                  index={index}
                  name={data.name}
                  studentNumber={data.studentNumber}
                  bonusPoint={data.bonusPoint}
                  minusPoint={data.minusPoint}
                  deletedAt={data.deletedAt}
                />
              );
            }
          })}
        </tbody>
      ) : (
        <tbody>
          <NoneList colspan={6} />
        </tbody>
      )}
    </table>
  );
};

export default WithdrawalMemberManagementList;
