'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import NoneList from '@/components/organisms/NoneList/NoneList';
import { applicantResponseInformation } from '@/types/applicant';

import React, { Fragment } from 'react';

import ApplicantListBody from './ApplicantListBody';

type Props = {
  applicantLists: applicantResponseInformation[];
  isAllChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
};

const ApplicantList = ({ applicantLists, isAllChecked, setIsAllChecked }: Props) => {
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4 w-[8%]'>이름</th>
            <th className='H4 w-[8%]'>학번</th>
            <th className='H4 w-[8%]'>성별</th>
            <th className='H4 w-[8%]'>신청건물</th>
            <th className='H4 w-[20%]'>본거주지</th>
            <th className='H4 w-[12%]'>등본파일</th>
            <th className='H4 w-[12%]'>우선선발</th>
            <th className='H4 w-[8%]'>배정건물</th>
            <th className='H4 w-[8%]'>합격여부</th>
            <th className='w-[8%]'>
              <div className='H4 flex  items-center justify-center text-center w-full'>
                <h1 className='mr-4'>전체</h1>
                <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan={10}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {applicantLists && applicantLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {applicantLists.map((i, index) => (
              <Fragment key={index}>
                <ApplicantListBody
                  name={i.studentName}
                  studentId={i.studentNumber}
                  gender={i.gender}
                  applicationBuilding={i.applicationDormitoryRoomTypeRes?.dormitoryName || ''}
                  residence={i.address}
                  certifiedFile={i.copy}
                  prioritySelection={i.prioritySelectionCopy}
                  assignedBuilding={i.resultDormitoryRoomTypeRes?.dormitoryName || ''}
                  isPassed={i.dormitoryApplicationResult}
                  isChecked={false}
                  setIsChecked={() => ({})}
                />
                <tr className='h-15' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody className='h-693'>
            <NoneList colspan={10} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ApplicantList;
