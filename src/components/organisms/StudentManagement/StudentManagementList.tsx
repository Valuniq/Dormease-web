import React from 'react';
import StudentManagementListBody from './StudentManagementListBody';
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

const StudentManagementList = ({
  list,
  genderDown,
  onGenderClick,
  buildingDown,
  onBuildingClick,
  bonusPointDown,
  onBonusPointClick,
  minusPointDown,
  onMinusPointClick,
  onStudentClick,
}: Props) => {
  return (
    <table className='text-nowrap text-center text-gray-grayscale50'>
      <thead className='table w-[1200px]'>
        <tr>
          <th className='H4 w-[5%]'>번 호</th>
          <th className='H4 w-[13%]'>이 름</th>
          <th className='H4 w-[13%]'>학 번</th>
          <th className='H4 relative w-[13%]'>
            성 별
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${genderDown ? '' : 'rotate-180'}`}
              onClick={() => onGenderClick(genderDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 relative w-[15%]'>
            건 물
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${buildingDown ? '' : 'rotate-180'}`}
              onClick={() => onBuildingClick(buildingDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 w-[13%]'>호 실</th>
          <th className='H4 relative w-[10%]'>
            상 점
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${bonusPointDown ? '' : 'rotate-180'}`}
              onClick={() => onBonusPointClick(bonusPointDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 relative w-[10%]'>
            벌 점
            <button
              className={`absolute top-1/2 -translate-y-1/2 ${minusPointDown ? '' : 'rotate-180'}`}
              onClick={() => onMinusPointClick(minusPointDown)}
            >
              <ArrowDown />
            </button>
          </th>
          <th className='H4 w-[8%]'>학 적</th>
        </tr>
        <tr className='h-15 border-b-1' />
      </thead>
      <tbody className='w-[1214px] block max-h-677 overflow-y-auto scrollbar-table'>
        <tr className='h-15' />
        {list &&
          list.map((data) => {
            return (
              <StudentManagementListBody
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
                onStudentClick={onStudentClick}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default StudentManagementList;
