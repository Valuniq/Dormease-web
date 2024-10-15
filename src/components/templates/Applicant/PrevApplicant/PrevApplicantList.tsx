'use client';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import NoneList from '../../../organisms/NoneList/NoneList';

type prevApplicantList = {
  title: string;
  registrationDate: string;
};

type Props = {
  prevApplicantLists: prevApplicantList[];
};

const PrevApplicantList = ({ prevApplicantLists }: Props) => {
  const router = useRouter();
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1250px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>제목</th>
            <th className='H4'>등록일자</th>
          </tr>
          <th colSpan={2}>
            <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
          </th>
        </thead>

        {prevApplicantLists && prevApplicantLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {prevApplicantLists.map((i, index) => (
              <Fragment key={index}>
                <tr
                  onClick={() => router.push('/dashboard/joins/applicants/details')}
                  className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'
                >
                  <td className='text-center'>{i.title}</td>
                  <td className='text-center'>{i.registrationDate}</td>
                </tr>
                <tr className='h-15' />{' '}
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody>
            <td className='h-full'>
              <NoneList colspan={2} />
            </td>{' '}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PrevApplicantList;
