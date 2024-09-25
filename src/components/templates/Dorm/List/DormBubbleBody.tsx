import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import { DormRoomInAssignedResponseInformation } from '@/types/dorm';
import React from 'react';

type Props = {
  studentList: DormRoomInAssignedResponseInformation[];
  onStudentClick: (selectStudent: number) => void;
  editAssign: boolean;
  roomSize: number;
  roomManual: () => void;
};

const DormBubbleBody = ({ studentList, onStudentClick, editAssign, roomSize, roomManual }: Props) => {
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
      <div className='absolute z-10 text-gray-grayscale50 mt-10 w-[517px] pointer-events-none'>
        <div className='balloon pointer-events-auto'>
          <div className='caption-2 max-h-256 overflow-y-auto noscrollbar-table'>
            <table>
              <tbody>
                {studentList.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr
                        key={index}
                        className={`caption-2 py-2 text-nowrap align-middle cursor-pointer ${data.assigned ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleStudentClick(data.id);
                        }}
                      >
                        <td className='rounded-l-5 pl-5'>{data.studentNumber}</td>
                        <td className='px-17'>{data.name}</td>
                        <td className='rounded-r-5 pr-5'>{data.phoneNumber}</td>
                      </tr>
                      <tr className='h-10' />
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className='mt-4 mb-14'>
            <BtnMiniVariant label='저장' variant='blue' disabled={editAssign} selected={false} onClick={roomManual} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DormBubbleBody;
