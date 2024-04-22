import React from 'react';
import BuildingManagementBody from './BuildingManagementBody';

type Props = {
  roomId: number;
  roomNumber: number;
  roomSize: number;
  gender: string;
  currentPeople: number;
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (schoolNumber: string) => void;
  selectStudents: String[];
  list: {
    schoolNumber: string;
    name: string;
    phoneNumber: string;
  }[];
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
  selectStudents,
  list,
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
        <td className='w-[30%]'>{gender}</td>
        <td className='w-[20%] H3 text-gray-grayscale30'>
          <h3 className='text-blue-blue30 inline-flex'>{currentPeople}</h3>/{roomSize}
        </td>
      </tr>
      {roomId === listClick && (
        <tr className='relative'>
          <td colSpan={4}>
            <BuildingManagementBody list={list} onStudentClick={onStudentClick} selectStudents={selectStudents} />
          </td>
        </tr>
      )}
      <tr className='h-8' />
    </>
  );
};

export default BuildingManagementListBody;
