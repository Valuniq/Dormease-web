'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import NoneList from '@/components/organisms/NoneList/NoneList';
import { applicantResponseInformation } from '@/types/applicant';

import React, { Fragment } from 'react';
import PrevApplicationDetailListBody from './PrevApplicantDetailListBody';

type Props = {
  applicantLists: applicantResponseInformation[];
};

const PrevApplicantDetailList = ({ applicantLists }: Props) => {
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
          </tr>
          <tr>
            <th colSpan={9}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {applicantLists && applicantLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {applicantLists.map((i, index) => (
              <Fragment key={index}>
                <PrevApplicationDetailListBody
                  name={i.studentName}
                  studentId={i.studentNumber}
                  gender={i.gender}
                  applicationBuilding={i.applicationDormitoryRoomTypeRes.dormitoryName || ''}
                  residence={i.address}
                  certifiedFile={i.copy}
                  prioritySelection={i.prioritySelectionCopy}
                  assignedBuilding={i.resultDormitoryRoomTypeRes.dormitoryName || ''}
                  isPassed={i.dormitoryApplicationResult}
                />
                <tr className='h-15' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody>
            <NoneList colspan={10} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PrevApplicantDetailList;
