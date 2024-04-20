import React from 'react';

type Props = {
  index: number;
  name: string;
  schoolNumber: string;
  gender: string;
  building: string;
  room: string;
  bonusPoint: number;
  minusPoint: number;
  schoolStatus: string;
  onStudentClick: (schoolNumber: string) => void;
};

const StudentManagementListBody = ({
  index,
  name,
  schoolNumber,
  gender,
  building,
  room,
  bonusPoint,
  minusPoint,
  schoolStatus,
  onStudentClick,
}: Props) => {
  return (
    <>
      <tr
        className='table rounded-5 w-[1200px] H4-caption h-38 text-nowrap relative hover:bg-gray-grayscale10 active:bg-gray-grayscale20 align-middle cursor-pointer'
        onClick={() => onStudentClick(schoolNumber)}
      >
        <td className='w-[5%]'>{index}</td>
        <td className='w-[13%]'>{name}</td>
        <td className='w-[13%]'>{schoolNumber}</td>
        <td className='w-[13%]'>{gender}</td>
        <td className='w-[15%]'>{building}</td>
        <td className='w-[13%]'>{room}</td>
        <td className='w-[10%]'>{bonusPoint}</td>
        <td className='w-[10%]'>{minusPoint}</td>
        <td className='w-[8%]'>{schoolStatus}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default StudentManagementListBody;
