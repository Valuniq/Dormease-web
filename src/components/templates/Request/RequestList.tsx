import React from 'react';
import RequestListBody from './RequestListBody';
import NoneList from '../../organisms/NoneList/NoneList';
import { RequestListResponseDataList } from '@/types/request';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

type Props = {
  onRequestClick: (requestmentId: number) => void;
  list: RequestListResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const RequestList = ({ list, onRequestClick, isLoading, isEndReached, setSize }: Props) => {
  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1200px]'>
        <tr>
          <th className='H4 w-[8%]'>번 호</th>
          <th className='H4 w-[56%]'>제 목</th>
          <th className='H4 w-[11%]'>작성자</th>
          <th className='H4 w-[17%]'>등록일</th>
          <th className='H4 w-[8%]'>답변여부</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      {list && list.length > 0 ? (
        <tbody className='w-[1214px] block h-677 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data, index) => {
            if (index === list.length - 1) {
              return (
                <RequestListBody
                  key={index}
                  index={index}
                  onRequestClick={onRequestClick}
                  item={data}
                  ref={lastElementRef}
                />
              );
            } else {
              return <RequestListBody key={index} index={index} onRequestClick={onRequestClick} item={data} />;
            }
          })}
        </tbody>
      ) : (
        <tbody>
          <NoneList colspan={5} />
        </tbody>
      )}
    </table>
  );
};

export default RequestList;
