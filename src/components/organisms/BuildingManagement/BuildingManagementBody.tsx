import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import { BuildingRoomInAssignedResponseInformation } from '@/types/buildingm';
import React from 'react';

type Props = {
  studentList: BuildingRoomInAssignedResponseInformation[];
  onStudentClick: (selectStudent: number) => void;
  editAssign: boolean;
  roomSize: number;
  roomManual?: (roomId: number) => void;
  roomId: number;
};

const BuildingManagementBody = ({ studentList, onStudentClick, editAssign, roomSize, roomManual, roomId }: Props) => {
  //roomSize랑 assigned가 true(배정된) 사생 비교
  const handleStudentClick = (selectStudent: number) => {
    const assignedCount = studentList.filter((student) => student.assigned).length;
    const selectedStudent = studentList.find((student) => student.id === selectStudent);

    if (assignedCount < roomSize || (selectedStudent && selectedStudent.assigned)) {
      onStudentClick(selectStudent);
    }
  };

  return (
    <>
      <div className='absolute z-10 text-gray-grayscale50 mt-10 left-115'>
        <div className='balloon caption-2'>
          <table>
            <tbody className='max-h-256 overflow-y-auto scrollbar-table'>
              {studentList.map((data) => {
                return (
                  <>
                    <tr
                      key={data.id}
                      className={`w-[290px] caption-2 py-2 text-nowrap align-middle cursor-pointer ${data.assigned && editAssign ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleStudentClick(data.id);
                      }}
                    >
                      <td className='rounded-l-5 pr-20 pl-10 min-w-100'>{data.studentNumber}</td>
                      <td className='pr-20 min-w-60'>{data.name}</td>
                      <td className='rounded-r-5 pr-10 min-w-100'>{data.phoneNumber}</td>
                    </tr>
                    <tr className='h-10' />
                  </>
                );
              })}
            </tbody>
          </table>
          {editAssign && (
            <div className='mt-4 mb-14'>
              <BtnMiniVariant
                label='배정'
                variant='blue'
                disabled={false}
                selected={false}
                onClick={() => roomManual && roomManual(roomId)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BuildingManagementBody;
