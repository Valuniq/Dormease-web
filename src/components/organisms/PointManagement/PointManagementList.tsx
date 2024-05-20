'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import Image from 'next/image';
import React, { Fragment } from 'react';
import SortImg from '@public/images/DropDownBtn.png';
import PointManagementListBody from './PointManagementListBody';
import NoneList from '../NoneList/NoneList';
import { PointMemberResponseDataList } from '@/types/pointManagement';

type Props = {
  pointManagementLists: PointMemberResponseDataList[];
  isAllChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
  plusSort: boolean; // true-오름차순, false-내림차순
  setPlusSort: (plusSort: boolean) => void;
  minusSort: boolean;
  setMinusSort: (minusSort: boolean) => void;
};

const PointManagementList = ({
  pointManagementLists,
  isAllChecked,
  setIsAllChecked,
  plusSort,
  setPlusSort,
  minusSort,
  setMinusSort,
}: Props) => {
  console.log(pointManagementLists);
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1250px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>번호</th>
            <th className='H4'>이름</th>
            <th className='H4'>학번</th>
            <th className='H4'>전화번호</th>
            <th onClick={() => setPlusSort(!plusSort)}>
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>상점</h1>
                <Image
                  src={SortImg}
                  height={8}
                  width={16}
                  className={`object-contain ${plusSort ? 'rotate-180' : ''}`}
                  alt='sort img'
                />
              </div>
            </th>
            <th onClick={() => setMinusSort(!minusSort)}>
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>벌점</h1>
                <Image
                  src={SortImg}
                  height={8}
                  width={16}
                  className={`object-contain ${minusSort ? 'rotate-180' : ''}`}
                  alt='sort img'
                />
              </div>
            </th>
            <th className='H4'>건물</th>
            <th className='H4'>호실</th>
            <th>
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>전체</h1>
                <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan={9}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>
        {pointManagementLists && pointManagementLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-14' />
            {pointManagementLists.map((i, key) => (
              <Fragment key={i.id}>
                <PointManagementListBody
                  index={key + 1}
                  data={{
                    id: i.id,
                    name: i.name,
                    studentNumber: i.studentNumber,
                    phoneNumber: i.phoneNumber,
                    bonusPoint: i.bonusPoint,
                    minusPoint: i.minusPoint,
                    dormitory: i.dormitory,
                    room: i.room,
                  }}
                  isChecked={false}
                  setIsChecked={function (isChecked: boolean): void {}}
                />
                <tr className='h-14' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody className='overflow-y-scroll'>
            <tr>
              <td className='h-500' colSpan={9}>
                <NoneList />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PointManagementList;
