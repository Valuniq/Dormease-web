import { studentIdState } from '@/recoil/studentManagement';
import { StudentListResponseDataList } from '@/types/student';
import { useRouter } from 'next/navigation';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { useSetRecoilState } from 'recoil';

type Props = {
  index: number;
  list: StudentListResponseDataList;
};

const statusText: { [key: string]: string } = {
  ENROLLMENT: '재학',
  LEAVE_OF_ABSENCE: '휴학',
  EXPULSION: '제적',
};

const StudentListBody: ForwardRefRenderFunction<HTMLTableRowElement, Props> = ({ index, list }, ref) => {
  const router = useRouter();
  const setStudentId = useSetRecoilState(studentIdState);

  return (
    <>
      <tr
        ref={ref}
        className='table rounded-5 w-[1200px] H4-caption h-38 text-nowrap relative hover:bg-gray-grayscale10 active:bg-gray-grayscale20 align-middle cursor-pointer'
        onClick={() => {
          setStudentId(list.residentId);
          router.push(`/dashboard/students/details`);
        }}
      >
        <td className='w-[5%]'>{index + 1}</td>
        <td className='w-[13%]'>{list.name}</td>
        <td className='w-[13%]'>{list.studentNumber}</td>
        <td className='w-[13%]'>{list.gender === 'MALE' ? '남성' : '여성'}</td>
        <td className='w-[15%]'>
          {list.dormitoryName}({list.roomSize}인실)
        </td>
        <td className='w-[13%]'>{list.roomNumber}호</td>
        <td className='w-[10%]'>{list.bonusPoint}</td>
        <td className='w-[10%]'>{list.minusPoint}</td>
        <td className='w-[8%]'>{statusText[list.schoolStatus]}</td>
      </tr>
      <tr className='h-14' />
    </>
  );
};

export default forwardRef<HTMLTableRowElement, Props>(StudentListBody);
