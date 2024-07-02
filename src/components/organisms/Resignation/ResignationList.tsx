'use client';
import React from 'react';
import ResignationListBody from './ResignationListBody';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import NoneList from '../NoneList/NoneList';

type Props = {
  onStudentClick: (schoolNumber: string) => void;
  setIsChecked: (isChecked: boolean) => void;
  isAllChecked: boolean;
  setIsAllChecked: (isChecked: boolean) => void;
  list: {
    name: string;
    schoolNumber: string;
    building: string;
    roomNumber: string;
    exitDate: string;
    hasKey: boolean;
    submissionDate: string;
    depositRefund: boolean;
    isChecked: boolean;
  }[];
};

const ResignationList = ({ list, onStudentClick, setIsChecked, isAllChecked, setIsAllChecked }: Props) => {
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
              <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
            </div>
          </th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>

      {list && list.length > 0 ? (
        <tbody className='block w-[1214px] h-677 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data, index) => {
            return (
              <ResignationListBody
                key={index}
                name={data.name}
                schoolNumber={data.schoolNumber}
                building={data.building}
                roomNumber={data.roomNumber}
                exitDate={data.exitDate}
                hasKey={data.hasKey}
                submissionDate={data.submissionDate}
                depositRefund={data.depositRefund}
                isChecked={data.isChecked}
                setIsChecked={setIsChecked}
                onStudentClick={onStudentClick}
              />
            );
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

export default ResignationList;
