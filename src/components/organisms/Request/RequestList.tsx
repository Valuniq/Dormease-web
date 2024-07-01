import React from 'react';
import RequestListBody from './RequestListBody';
import NoneList from '../NoneList/NoneList';

type Props = {
  onRequestClick: (index: number) => void;
  list: {
    index: number;
    title: string;
    name: string;
    date: string;
    progression: string;
  }[];
};

const RequestList = ({ list, onRequestClick }: Props) => {
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

      {list ? (
        <tbody className='w-[1214px] block h-677 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data) => {
            return (
              <RequestListBody
                key={data.index}
                index={data.index}
                title={data.title}
                name={data.name}
                date={data.date}
                progression={data.progression}
                onRequestClick={onRequestClick}
              />
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <td className='h-full'>
            <NoneList colspan={5} />
          </td>
        </tbody>
      )}
    </table>
  );
};

export default RequestList;
