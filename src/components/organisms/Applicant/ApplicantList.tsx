import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import Image from 'next/image';
import React from 'react';
import SortImg from '@public/images/DropDownBtn.png';
import ApplicantListBody, { Props as ApplicantListBodyType } from './ApplicantListBody';

type Props = {
  applicantLists: ApplicantListBodyType[];
  isAllChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
};

const ApplicantList = ({ applicantLists, isAllChecked, setIsAllChecked }: Props) => {
  return (
    <div>
      <div className='w-[1250px] h-693 overflox-y-scroll border-b-1 border-b-gray-grayscale50'>
        <table className='w-full'>
          <thead className='border-b-1 border-b-gray-grayscale50'>
            <tr className='text-gray-grayscale50'>
              <th className='H4'>이름</th>
              <th className='H4'>학번</th>
              <th className='H4'>성별</th>
              <th className='H4'>신청건물</th>
              <th className='H4'>본거주지</th>
              <th className='H4'>등본파일</th>
              <th className='H4'>우선선발</th>
              <th className='H4'>배정건물</th>
              <th className='H4'>합격여부</th>
              <th>
                <div className='H4 flex  items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>전체</h1>
                  <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
                </div>
              </th>
            </tr>
            <tr className='h-18' />
          </thead>
          <tbody className=''>
            <tr className='h-15' />
            {applicantLists.map((i, index) => (
              <>
                <tr key={index}>
                  <ApplicantListBody
                    name={i.name}
                    studentId={i.studentId}
                    gender={i.gender}
                    applicationBuilding={i.applicationBuilding}
                    residence={i.residence}
                    certifiedFile={i.certifiedFile}
                    prioritySelection={i.prioritySelection}
                    assignedBuilding={i.assignedBuilding}
                    isPassed={i.isPassed}
                    isChecked={i.isChecked}
                    setIsChecked={i.setIsChecked}
                  />
                </tr>
                <tr className='h-15' />
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantList;
