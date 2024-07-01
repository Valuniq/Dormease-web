import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';

import React from 'react';
import NoneList from '../NoneList/NoneList';

import ApplicantListBody, { Props as ApplicantListBodyType } from './ApplicantListBody';

type Props = {
  applicantLists: ApplicantListBodyType[];
  isAllChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
};

const ApplicantList = ({ applicantLists, isAllChecked, setIsAllChecked }: Props) => {
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
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
          <th colSpan={10}>
            <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
          </th>
        </thead>

        {applicantLists && applicantLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {applicantLists.map((i) => (
              <>
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
                <tr className='h-15' />
              </>
            ))}
          </tbody>
        ) : (
          <tbody>
            {' '}
            <td className='h-full'>
              <NoneList colspan={10} />
            </td>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ApplicantList;
