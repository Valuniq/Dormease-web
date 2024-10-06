import React from 'react';
import DepositListBody from './DepositListBody';
import NoneList from '../../organisms/NoneList/NoneList';

type Props = {
  list: DepositListResponseInformation[];
  selectedId: number[];
  isLoading: boolean;
};

const DepositList = ({ list, selectedId, isLoading }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1331px]'>
        <tr>
          <th className='H4 w-[15%]'>이 름</th>
          <th className='H4 w-[20%]'>학 번</th>
          <th className='H4 w-[18%]'>성 별</th>
          <th className='H4 w-[32%]'>배정건물</th>
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
                dormitoryApplicationId={data.dormitoryApplicationId}
                studentName={data.studentName}
                studentNumber={data.studentNumber}
                gender={data.gender}
                resultDormitoryRoomTypeRes={
                  data.resultDormitoryRoomTypeRes.dormitoryName +
                  '(' +
                  data.resultDormitoryRoomTypeRes.roomSize +
                  '인실)'
                }
                dormitoryApplicationResult={data.dormitoryApplicationResult}
                selectedId={selectedId}
              />
            );
          })}
        </tbody>
      ) : isLoading ? (
        <tbody className='h-696'></tbody>
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
