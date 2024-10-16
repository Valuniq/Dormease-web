import React from 'react';
import DormListBody from './DormListBody';
import NoneList from '../../../organisms/NoneList/NoneList';
import { DormRoomResponseInformation, DormRoomInAssignedResponseInformation } from '@/types/dorm';

type Props = {
  roomList: DormRoomResponseInformation[] | undefined;
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (selectStudent: number) => void;
  studentList: DormRoomInAssignedResponseInformation[];
  editAssign: boolean;
  roomManual: () => void;
};

const DormList = ({ roomList, studentList, listClick, onListClick, onStudentClick, editAssign, roomManual }: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[734px]'>
        <tr>
          <th className='H4 w-[20%]'>호 실</th>
          <th className='H4 w-[30%]'>인 실</th>
          <th className='H4 w-[30%]'>성 별</th>
          <th className='H4 w-[20%]'>인 원</th>
        </tr>
        <tr className='h-12 border-b-1' />
      </thead>

      {roomList && roomList.length > 0 ? (
        <tbody className='block w-[748px] h-695 overflow-y-auto scrollbar-table'>
          <tr className='h-12' />
          {roomList.map((data, index) => {
            return (
              <DormListBody
                key={index}
                listClick={listClick}
                onListClick={onListClick}
                onStudentClick={onStudentClick}
                studentList={studentList}
                editAssign={editAssign}
                roomManual={roomManual}
                item={data}
              />
            );
          })}
        </tbody>
      ) : (
        <tbody className='h-693'>
          <NoneList colspan={4} />
        </tbody>
      )}
    </table>
  );
};

export default DormList;
