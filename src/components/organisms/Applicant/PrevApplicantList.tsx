import React from 'react';
import NoneList from '../NoneList/NoneList';

type prevApplicantList = {
  title: string;
  registrationDate: string;
};

type Props = {
  prevApplicantLists: prevApplicantList[];
};

const PrevApplicantList = ({ prevApplicantLists }: Props) => {
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
        <tbody className='overflow-y-scroll'>
          {prevApplicantLists && prevApplicantLists.length > 0 ? (
            <>
              {prevApplicantLists.map((i, index) => (
                <>
                  <tr className='h-15' />
                  <tr className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'>
                    <td className='text-center'>{i.title}</td>
                    <td className='text-center'>{i.registrationDate}</td>
                  </tr>
                  <tr className='h-15' />
                </>
              ))}
            </>
          ) : (
            <td className='h-500' colSpan={2}>
              <NoneList />
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PrevApplicantList;
