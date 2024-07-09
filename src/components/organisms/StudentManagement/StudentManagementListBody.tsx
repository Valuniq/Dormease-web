import { studentIdState } from '@/recoil/studentManagement';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type Props = {
  index: number;
  id: number;
  name: string;
  schoolNumber: string;
  gender: string;
  building: string;
  room: string;
  bonusPoint: number;
  minusPoint: number;
  schoolStatus: string;
};

const StudentManagementListBody = ({
  index,
  id,
  name,
  schoolNumber,
  gender,
  building,
  room,
  bonusPoint,
  minusPoint,
  schoolStatus,
}: Props) => {
  const router = useRouter();
  const setStudentId = useSetRecoilState(studentIdState);

  return (
    <>
      <tr
        className='table rounded-5 w-[1200px] H4-caption h-38 text-nowrap relative hover:bg-gray-grayscale10 active:bg-gray-grayscale20 align-middle cursor-pointer'
        onClick={() => {
          setStudentId(id);
          router.push(`/dashboard/StudentManagement/Detail`);
        }}
      >
        <td className='w-[5%]'>{index + 1}</td>
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
