import React from 'react';
import StudentMangementListBody from './StudentMangementListBody';
import ArrowDown from '@public/images/ArrowDown.svg';

type Props = {
  genderDown: boolean;
  onGenderClick: (genderDown: boolean) => void;
  buildingDown: boolean;
  onBuildingClick: (genderDown: boolean) => void;
  bonusPointDown: boolean;
  onBonusPointClick: (genderDown: boolean) => void;
  minusPointDown: boolean;
  onMinusPointClick: (genderDown: boolean) => void;
  studentClick: string;
  onStudentClick: (schoolNumber: string) => void;
  list: {
    index: number;
    name: string;
    schoolNumber: string;
    gender: string;
    building: string;
    room: string;
    bonusPoint: number;
    minusPoint: number;
    schoolStatus: string;
  }[];
};

const StudentMangementList = ({
  list,
  genderDown,
  onGenderClick,
  buildingDown,
  onBuildingClick,
  bonusPointDown,
  onBonusPointClick,
  minusPointDown,
  onMinusPointClick,
  studentClick,
  onStudentClick,
}: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className=''>
        <tr className=''>
          <th className='H4 text-left pl-8'>번 호</th>
          <th className='H4'>이 름</th>
          <th className='H4'>학 번</th>
          <th className='H4 relative'>
            성 별
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${genderDown ? '' : 'rotate-180'}`}
              onClick={() => onGenderClick(genderDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 relative'>
            건 물
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${buildingDown ? '' : 'rotate-180'}`}
              onClick={() => onBuildingClick(buildingDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4'>호 실</th>
          <th className='H4 relative'>
            상 점
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${bonusPointDown ? '' : 'rotate-180'}`}
              onClick={() => onBonusPointClick(bonusPointDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 relative'>
            벌 점
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${minusPointDown ? '' : 'rotate-180'}`}
              onClick={() => onMinusPointClick(minusPointDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 text-right pr-22'>학 적</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tr className='h-15' />
      <tbody className=''>
        {list.map((data) => {
          return (
            <StudentMangementListBody
              key={data.index}
              index={data.index}
              name={data.name}
              schoolNumber={data.schoolNumber}
              gender={data.gender}
              building={data.building}
              room={data.room}
              bonusPoint={data.bonusPoint}
              minusPoint={data.minusPoint}
              schoolStatus={data.schoolStatus}
              studentClick={studentClick}
              onStudentClick={onStudentClick}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentMangementList;
