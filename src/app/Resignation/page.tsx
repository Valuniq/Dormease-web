import React from 'react';
import ResignationList from '@/components/organisms/Resignation/ResignationList';
import BtnLargeVariant from '@/components/atoms/AllBtn/BtnLargeVariant/BtnLargeVariant';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  clickSchoolNumber: string;
  onStudentClick: (schoolNumber: string) => void;
  setIsChecked: (isChecked: boolean) => void;
  isAllChecked: boolean;
  setIsAllChecked: (isChecked: boolean) => void;
  list: {
    name: string;
    schoolNumber: string;
    building: string;
    roomNumber: string;
    exitDate: string;
    hasKey: boolean;
    submissionDate: string;
    depositRefund: boolean;
    isChecked: boolean;
  }[];
};

const Resignation = ({
  list,
  clickSchoolNumber,
  onStudentClick,
  setIsChecked,
  isAllChecked,
  setIsAllChecked,
}: Props) => {
  return (
    <div className='flex flex-col w-[1200px]'>
      <div className='flex justify-between items-center mb-32'>
        <h1 className='H0 text-gray-grayscale50 text-nowrap'>퇴사 확인서 제출 명단</h1>
        <div>
          <BtnLargeVariant label='삭제' disabled={!clickSchoolNumber} variant='red' />
        </div>
      </div>
      <ResignationList
        list={list}
        onStudentClick={onStudentClick}
        setIsChecked={setIsChecked}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
      />
      <div className='mt-21 flex justify-end gap-14'>
        <BtnMidVariant label='지급불가' disabled={!clickSchoolNumber} variant='blue' />
        <BtnMidVariant label='지급하기' disabled={!clickSchoolNumber} variant='red' />
      </div>
    </div>
  );
};

export default Resignation;
