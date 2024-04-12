import React from 'react';

type prevApplicantList = {
  title: string;
  registrationDate: string;
};

type Props = {
  prevApplicantLists: prevApplicantList[];
};

const PrevApplicantList = ({ prevApplicantLists }: Props) => {
  return (
    <div>
      <div className='w-[1250px] h-693 overflox-y-scroll border-b-1 border-b-gray-grayscale50'>
        <table className='w-full'>
          <thead className='border-b-1 border-b-gray-grayscale50'>
            <tr className='text-gray-grayscale50'>
              <th className='H4'>제목</th>
              <th className='H4'>등록일자</th>
            </tr>
            <tr className='h-18' />
          </thead>
          <tbody className=''>
            <tr className='h-15' />
            {prevApplicantLists.map((i, index) => (
              <>
                <tr key={index}>
                  <td className='text-center'>
                    <h1 className='H4-caption text-gray-grayscale50'>{i.title}</h1>
                  </td>
                  <td className='text-center'>
                    <h1 className='H4-caption text-gray-grayscale50'>{i.registrationDate}</h1>
                  </td>
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

export default PrevApplicantList;
