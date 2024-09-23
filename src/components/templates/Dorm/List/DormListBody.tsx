import React from 'react';
import BuildingManagementBody from './DormBubbleBody';
import { DormRoomInAssignedResponseInformation, DormRoomResponseInformation } from '@/types/dorm';

type Props = {
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (selectStudent: number) => void;
  studentList: DormRoomInAssignedResponseInformation[];
  editAssign: boolean;
  roomManual: () => void;
  item: DormRoomResponseInformation;
};

const DormListBody = ({ listClick, onListClick, onStudentClick, studentList, editAssign, roomManual, item }: Props) => {
  return (
    <>
      <tr
        className='table rounded-5 w-[734px] H4-caption text-nowrap align-middle cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
        onClick={(event) => {
          event.stopPropagation();
          onListClick(item.id);
        }}
      >
        <td className='w-[20%]'>{item.roomNumber}호</td>
        <td className='w-[30%] text-blue-blue30 underline'>{item.roomSize}인실</td>
        <td className='w-[30%]'>{item.gender === 'MALE' ? '남' : '여'}</td>
        <td className='w-[20%] H3 text-gray-grayscale30'>
          <h3 className='text-blue-blue30 inline-flex'>{item.currentPeople}</h3>/{item.roomSize}
        </td>
      </tr>
      {item.id === listClick && studentList.length > 0 && (
        <tr>
          <td className='p-0 m-0 relative'>
            <BuildingManagementBody
              studentList={studentList}
              onStudentClick={onStudentClick}
              editAssign={editAssign}
              roomSize={item.roomSize}
              roomManual={roomManual}
            />
          </td>
        </tr>
      )}
      <tr className='h-8' />
    </>
  );
};

export default DormListBody;
