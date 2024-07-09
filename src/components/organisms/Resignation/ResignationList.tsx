'use client';
import React from 'react';
import ResignationListBody from './ResignationListBody';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import NoneList from '../NoneList/NoneList';
import { ResignationListResponseDataList } from '@/types/resignation';

type Props = {
  checkedItems: number[];
  handleCheckboxChange: (id: number) => void;
  list: ResignationListResponseDataList[];
};

const ResignationList = ({ list, checkedItems, handleCheckboxChange }: Props) => {
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
          {list.map((data) => {
            return (
              <ResignationListBody
                key={data.exitRequestmentId}
                exitRequestmentId={data.exitRequestmentId}
                residentName={data.residentName}
                studentNumber={data.studentNumber}
                dormitoryName={data.dormitoryName}
                roomSize={data.roomSize}
                roomNumber={data.roomNumber}
                exitDate={data.exitDate}
                hasKey={data.hasKey}
                createDate={data.createDate}
                securityDepositReturnStatus={data.securityDepositReturnStatus}
                isChecked={checkedItems.includes(data.exitRequestmentId)}
                handleCheckboxChange={handleCheckboxChange}
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
