import React, { Fragment } from 'react';
import AppMemberManagementListBody from './AppMemberManagementListBody';
import NoneList from '../NoneList/NoneList';
import { userResponseDataList } from '@/types/userManagement';
import SortIcon from '@/components/atoms/AllBtn/SortBtn/SortBtn';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

type Props = {
  appMemberManagementLists: userResponseDataList[];
  isLoading: boolean;
  sortConfig: { sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate'; isAscending: boolean };
  setSortConfig: (config: { sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate'; isAscending: boolean }) => void;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
};

const AppMemberManagementList = ({
  isLoading,
  isEndReached,
  setSize,
  appMemberManagementLists,
  sortConfig,
  setSortConfig,
}: Props) => {
  const handleSort = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    const isAscending = sortConfig.sortBy === sortBy ? !sortConfig.isAscending : true;
    setSortConfig({ sortBy, isAscending });
  };

  const getSortIconClass = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    if (sortConfig.sortBy === sortBy) {
      return sortConfig.isAscending ? 'rotate-0 ' : 'rotate-180';
    }
    return '';
  };

  const getFillColor = (sortBy: 'bonusPoint' | 'minusPoint' | 'createdDate') => {
    return sortConfig.sortBy === sortBy ? '#3678D8' : '#323232';
  };

  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className=' w-full h-36 bg-white text-gray-grayscale50 sticky top-0 z-1'>
          <tr className=''>
            <th className='H4'>번호</th>
            <th className='H4'>이름</th>
            <th className='H4'>학번</th>
            <th className='H4'>휴대전화</th>
            <th
              className='h-30 rounded-8  cursor-pointer'
              onClick={() => handleSort('bonusPoint')}
              style={{ backgroundColor: sortConfig.sortBy === 'bonusPoint' ? '#DAE9FF' : 'transparent' }}
            >
              <div className='H4 flex items-center justify-center text-center '>
                <h1 className='mr-4'>상점</h1>
                <SortIcon
                  className={`object-contain ${getSortIconClass('bonusPoint')}`}
                  width={16}
                  height={8}
                  fillColor={getFillColor('bonusPoint')}
                />
              </div>
            </th>
            <th
              className='h-30 rounded-8  cursor-pointer'
              onClick={() => handleSort('minusPoint')}
              style={{ backgroundColor: sortConfig.sortBy === 'minusPoint' ? '#DAE9FF' : 'transparent' }}
            >
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>벌점</h1>
                <SortIcon
                  className={`object-contain ${getSortIconClass('minusPoint')}`}
                  width={16}
                  height={8}
                  fillColor={getFillColor('minusPoint')}
                />
              </div>
            </th>
            <th
              className='h-30 rounded-8 cursor-pointer'
              onClick={() => handleSort('createdDate')}
              style={{ backgroundColor: sortConfig.sortBy === 'createdDate' ? '#DAE9FF' : 'transparent' }}
            >
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>생성일자</h1>
                <SortIcon
                  className={`object-contain ${getSortIconClass('createdDate')}`}
                  width={16}
                  height={8}
                  fillColor={getFillColor('createdDate')}
                />
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan={8}>
              <div className='w-[1305px] h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {appMemberManagementLists && appMemberManagementLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {appMemberManagementLists.map((i, index) => {
              if (index === appMemberManagementLists.length - 1) {
                return (
                  <Fragment key={`${i.id}-${index}`}>
                    <AppMemberManagementListBody
                      index={index + 1}
                      id={i.id}
                      name={i.name}
                      studentNumber={i.studentNumber}
                      phoneNumber={i.phoneNumber}
                      bonusPoint={i.bonusPoint}
                      minusPoint={i.minusPoint}
                      createdAt={i.createdAt}
                      ref={lastElementRef}
                    />
                    <tr className='h-15' />
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={`${i.id}-${index}`}>
                    <AppMemberManagementListBody
                      index={index + 1}
                      id={i.id}
                      name={i.name}
                      studentNumber={i.studentNumber}
                      phoneNumber={i.phoneNumber}
                      bonusPoint={i.bonusPoint}
                      minusPoint={i.minusPoint}
                      createdAt={i.createdAt}
                    />
                    <tr className='h-15' />
                  </Fragment>
                );
              }
            })}
          </tbody>
        ) : (
          <tbody>
            <NoneList colspan={7} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default AppMemberManagementList;
