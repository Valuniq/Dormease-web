'use client';
import React from 'react';
import ResignListBody from './ResignListBody';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import NoneList from '../../../organisms/NoneList/NoneList';
import { ResignListResponseDataList } from '@/types/resign';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

type Props = {
  checkedItems: number[];
  handleCheckboxChange: (id: number) => void;
  list: ResignListResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const ResignList = ({ list, checkedItems, handleCheckboxChange, isLoading, isEndReached, setSize }: Props) => {
  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1200px]'>
        <tr>
          <th className='H4 w-[10%]'>이 름</th>
          <th className='H4 w-[12%]'>학 번</th>
          <th className='H4 w-[17%]'>건 물</th>
          <th className='H4 w-[9%]'>호 실</th>
          <th className='H4 w-[12%]'>퇴실날짜</th>
          <th className='H4 w-[10%]'>열쇠 수령</th>
          <th className='H4 w-[12%]'>제출날짜</th>
          <th className='H4 w-[10%]'>보증금 환급</th>
          <th className={`H4 w-[8%] ${list && list.length > 0 ? 'visible' : 'invisible'}`}>
            <div className='flex items-center justify-center text-center w-full gap-6'>
              전 체
              <Checkbox
                isChecked={list.length > 0 && checkedItems.length === list.length}
                setIsChecked={(isChecked) => {
                  if (isChecked) {
                    list.forEach((item) => {
                      if (!checkedItems.includes(item.exitRequestmentId)) {
                        handleCheckboxChange(item.exitRequestmentId);
                      }
                    });
                  } else {
                    list.forEach((item) => {
                      if (checkedItems.includes(item.exitRequestmentId)) {
                        handleCheckboxChange(item.exitRequestmentId);
                      }
                    });
                  }
                }}
              />
            </div>
          </th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      {list && list.length > 0 ? (
        <tbody className='block w-[1214px] max-h-677 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data, index) => {
            if (index === list.length - 1) {
              return (
                <ResignListBody
                  key={index}
                  isChecked={checkedItems.includes(data.exitRequestmentId)}
                  handleCheckboxChange={handleCheckboxChange}
                  item={data}
                  ref={lastElementRef}
                />
              );
            } else {
              return (
                <ResignListBody
                  key={index}
                  isChecked={checkedItems.includes(data.exitRequestmentId)}
                  handleCheckboxChange={handleCheckboxChange}
                  item={data}
                />
              );
            }
          })}
        </tbody>
      ) : (
        <tbody>
          <NoneList colspan={9} />
        </tbody>
      )}
    </table>
  );
};

export default ResignList;
