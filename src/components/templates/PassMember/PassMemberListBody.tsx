import React from 'react';

export type Props = {
  degree: number;
  name: string;
  studentId: string;
  gender: string;
  isSmoking: boolean;
  appliedRoommate: string;
  bedNumber: number | null;
  room: number | null;
  assignment: boolean | null;
};

const PassMemberListBody = ({
  degree,
  name,
  studentId,
  gender,
  isSmoking,
  appliedRoommate,
  bedNumber,
  room,
  assignment,
}: Props) => {
  return (
    <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
      <td className='text-center'>{degree}</td>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{studentId}</td>
      <td className='text-center'>{gender}</td>
      <td className='text-center'>{isSmoking ? 'O' : 'X'}</td>
      <td className='text-center'>{appliedRoommate}</td>
      <td className='text-center'>{bedNumber !== null ? `${bedNumber}번` : '-'}</td>
      <td className='text-center'>{room !== null ? `${room}호` : '-'}</td>
      <td className='text-center'>{assignment !== null ? (assignment ? 'O' : 'X') : '-'}</td>
    </tr>
  );
};

export default PassMemberListBody;
