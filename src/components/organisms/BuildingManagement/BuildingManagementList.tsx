import React from 'react';
import BuildingManagementListBody from './BuildingManagementListBody';
import NoneList from '../NoneList/NoneList';
import {
  BuildingManagementRoomResponseInformation,
  BuildingRoomInAssignedResponseInformation,
} from '@/types/buildingm';

type Props = {
  roomList: BuildingManagementRoomResponseInformation[] | undefined;
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (selectStudent: number) => void;
  studentList: BuildingRoomInAssignedResponseInformation[];
  editAssign: boolean;
  roomManual?: (roomId: number) => void;
};

const BuildingManagementList = ({
  roomList,
  studentList,
  listClick,
  onListClick,
  onStudentClick,
  editAssign,
  roomManual,
}: Props) => {
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
          {roomList.map((data) => {
            return (
              <BuildingManagementListBody
                key={data.id}
                roomId={data.id}
                roomNumber={data.roomNumber}
                roomSize={data.roomSize}
                gender={data.gender}
                currentPeople={data.currentPeople}
                listClick={listClick}
                onListClick={onListClick}
                onStudentClick={onStudentClick}
                studentList={studentList}
                editAssign={editAssign}
                roomManual={roomManual}
              />
            );
          })}
        </tbody>
      ) : (
        <tbody>
          <NoneList colspan={4} />
        </tbody>
      )}
    </table>
  );
};

export default BuildingManagementList;
