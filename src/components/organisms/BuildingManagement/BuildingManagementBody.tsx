import React from 'react';

type Props = {
  list: {
    schoolNumber: string;
    name: string;
    phoneNumber: string;
  }[];
  onStudentClick: (schoolNumber: string) => void;
  selectStudents: String[];
};

const BuildingManagementBody = ({ list, onStudentClick, selectStudents }: Props) => {
  return (
    <>
      <div className='absolute z-10 text-gray-grayscale50 mt-10 left-100'>
        <div className='balloon caption-2'>
          <table>
            <tbody className='max-h-256 overflow-y-auto scrollbar-table'>
              {list.map((data) => {
                return (
                  <>
                    <tr
                      key={data.schoolNumber}
                      className={`w-[290px] caption-2 py-2 text-nowrap align-middle cursor-pointer ${selectStudents.includes(data.schoolNumber) ? 'bg-gray-grayscale20' : 'hover:bg-gray-grayscale10 active:bg-gray-grayscale20'}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        onStudentClick(data.schoolNumber);
                      }}
                    >
                      <td className='rounded-l-5 pr-20 pl-10'>{data.schoolNumber}</td>
                      <td className='pr-20'>{data.name}</td>
                      <td className='rounded-r-5 pr-10'>{data.phoneNumber}</td>
                    </tr>
                    <tr className='h-10' />
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BuildingManagementBody;
