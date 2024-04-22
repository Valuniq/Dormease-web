import React from 'react';
import BuildingManagementListBody from './BuildingManagementListBody';
import NoneList from '../NoneList/NoneList';

type Props = {
  listClick: number;
  onListClick: (roomId: number) => void;
  onStudentClick: (schoolNumber: string) => void;
  selectStudents: String[];
  list: {
    roomId: number;
    roomNumber: number;
    roomSize: number;
    gender: string;
    currentPeople: number;
  }[];
  studentList: {
    schoolNumber: string;
    name: string;
    phoneNumber: string;
  }[];
};

const BuildingManagementList = ({
  list,
  studentList,
  selectStudents,
  listClick,
  onListClick,
  onStudentClick,
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
      <tbody className='block w-[748px] h-695 overflow-y-auto scrollbar-table'>
        {list && list.length > 0 ? (
          <>
            <tr className='h-12' />
            {list.map((data) => {
              return (
                <BuildingManagementListBody
                  key={data.roomId}
                  roomId={data.roomId}
                  roomNumber={data.roomNumber}
                  roomSize={data.roomSize}
                  gender={data.gender}
                  currentPeople={data.currentPeople}
                  listClick={listClick}
                  onListClick={onListClick}
                  onStudentClick={onStudentClick}
                  selectStudents={selectStudents}
                  list={studentList}
                />
              );
            })}
          </>
        ) : (
          <NoneList />
        )}
      </tbody>
    </table>
  );
};

export default BuildingManagementList;
