import React from 'react';
import DepositListBody from './DepositListBody';
import NoneList from '../../organisms/NoneList/NoneList';

type Props = {
  list: {
    id: number;
    name: string;
    studentNumber: string;
    gender: string;
    applicationBuilding: string;
    assignedBuilding: string;
    isPass: string;
  }[];
  selectedId: number[];
};

const DepositList = ({ list, selectedId }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1331px]'>
        <tr>
          <th className='H4 w-[15%]'>이 름</th>
          <th className='H4 w-[15%]'>학 번</th>
          <th className='H4 w-[15%]'>성 별</th>
          <th className='H4 w-[20%]'>신청건물</th>
          <th className='H4 w-[20%]'>배정건물</th>
          <th className='H4 w-[15%]'>합격여부</th>
        </tr>
        <tr className='h-15 border-b-1 border-gray-grayscale30' />
      </thead>
      {list && list.length > 0 ? (
        <tbody className='w-[1345px] block h-696 overflow-y-auto scrollbar-table'>
          <tr className='h-15' />
          {list.map((data, index) => {
            return (
              <DepositListBody
                key={index}
                id={data.id}
                name={data.name}
                studentNumber={data.studentNumber}
                gender={data.gender}
                applicationBuilding={data.applicationBuilding}
                assignedBuilding={data.assignedBuilding}
                isPass={data.isPass}
                selectedId={selectedId}
              />
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <NoneList colspan={6} />
          <tr className='border-b-1' />
        </tbody>
      )}
    </table>
  );
};

export default DepositList;
