import React from 'react';
import BuildingManagementBody from './BuildingManagementBody';
import { BuildingRoomInAssignedResponseInformation } from '@/types/buildingm';

type Props = {
  roomId: number;
  roomNumber: number;
  roomSize: number;
  gender: string;
  currentPeople: number;
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (selectStudent: number) => void;
  studentList: BuildingRoomInAssignedResponseInformation[];
  editAssign: boolean;
  roomManual?: (roomId: number) => void;
};

const BuildingManagementListBody = ({
  roomId,
  roomNumber,
  roomSize,
  gender,
  currentPeople,
  listClick,
  onListClick,
  onStudentClick,
  studentList,
  editAssign,
  roomManual,
}: Props) => {
  return (
    <>
      <tr
        className='table rounded-5 w-[734px] H4-caption text-nowrap align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
        onClick={(event) => {
          event.stopPropagation();
          onListClick(roomId);
        }}
      >
        <td className='w-[20%]'>{roomNumber}호</td>
        <td className='w-[30%] text-blue-blue30 underline'>{roomSize}인실</td>
        <td className='w-[30%]'>{gender === 'MALE' ? '남' : '여'}</td>
        <td className='w-[20%] H3 text-gray-grayscale30'>
          <h3 className='text-blue-blue30 inline-flex'>{currentPeople}</h3>/{roomSize}
        </td>
      </tr>
      {roomId === listClick && (
        <tr className='relative'>
          <td colSpan={4}>
            <BuildingManagementBody
              studentList={studentList}
              onStudentClick={onStudentClick}
              editAssign={editAssign}
              roomSize={roomSize}
              roomManual={roomManual}
              roomId={roomId}
            />
          </td>
        </tr>
      )}
      <tr className='h-8' />
    </>
  );
};

export default BuildingManagementListBody;
