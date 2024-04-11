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
  studentClick: string;
  onStudentClick: (schoolNumber: string) => void;
};

const StudentMangementListBody = ({
  index,
  name,
  schoolNumber,
  gender,
  building,
  room,
  bonusPoint,
  minusPoint,
  schoolStatus,
  studentClick,
  onStudentClick,
}: Props) => {
  return (
    <>
      <tr
        className={`H4-caption h-38 text-nowrap relative active:bg-gray-grayscale20 align-middle cursor-pointer ${studentClick === schoolNumber ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10'}`}
        onClick={() => onStudentClick(schoolNumber)}
      >
        <td className='pl-8 pr-35 rounded-l-5'>{index}</td>
        <td className='pl-35 pr-35'>{name}</td>
        <td className='pl-35 pr-35'>{schoolNumber}</td>
        <td className='pl-35 pr-35'>{gender}</td>
        <td className='pl-35 pr-35'>{building}</td>
        <td className='pl-35 pr-35'>{room}</td>
        <td className='pl-60 pr-61'>{bonusPoint}</td>
        <td className='pl-61 pr-54'>{minusPoint}</td>
        <td className='pl-54 pr-24 rounded-r-5'>{schoolStatus}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default StudentMangementListBody;
