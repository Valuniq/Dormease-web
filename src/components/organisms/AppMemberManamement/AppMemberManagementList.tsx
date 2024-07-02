import Image from 'next/image';
import React from 'react';
import SortImg from '@public/images/DropDownBtn.png';
import AppMemberManagementListBody, { Props as AppMemberManagementListBodyType } from './AppMemberManagementListBody';
import NoneList from '../NoneList/NoneList';

type Props = {
  appMemberManagementLists: AppMemberManagementListBodyType[];
  plusSort: boolean; // true-오름차순, false-내림차순
  setPlusSort: (plusSort: boolean) => void;
  minusSort: boolean;
  setMinusSort: (minusSort: boolean) => void;
  creationDateSort: boolean;
  setCreationDateSort: (creationDateSort: boolean) => void;
};

const AppMemberManagementList = ({
  appMemberManagementLists,
  plusSort,
  setPlusSort,
  minusSort,
  setMinusSort,
  creationDateSort,
  setCreationDateSort,
}: Props) => {
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>번호</th>
            <th className='H4'>이름</th>
            <th className='H4'>학번</th>
            <th className='H4'>휴대전화</th>
            <th onClick={() => setPlusSort(!plusSort)}>
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>상점</h1>
                <Image
                  src={SortImg}
                  height={8}
                  width={16}
                  className={`object-contain ${plusSort ? 'rotate-180' : ''}`}
                  alt='sort img'
                />
              </div>
            </th>
            <th onClick={() => setMinusSort(!minusSort)}>
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>벌점</h1>
                <Image
                  src={SortImg}
                  height={8}
                  width={16}
                  className={`object-contain ${minusSort ? 'rotate-180' : ''}`}
                  alt='sort img'
                />
              </div>
            </th>
            <th onClick={() => setCreationDateSort(!creationDateSort)}>
              <div className='H4 flex items-center justify-center text-center w-full'>
                <h1 className='mr-4'>생성일자</h1>
                <Image
                  src={SortImg}
                  height={8}
                  width={16}
                  className={`object-contain ${creationDateSort ? 'rotate-180' : ''}`}
                  alt='sort img'
                />
              </div>
            </th>
          </tr>
          <th colSpan={8}>
            <div className='w-[1305px] h-18 border-b-1 border-b-gray-grayscale50' />
          </th>
        </thead>

        {appMemberManagementLists && appMemberManagementLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {appMemberManagementLists.map((i, index) => (
              <>
                <AppMemberManagementListBody
                  index={i.index}
                  name={i.name}
                  studentId={i.studentId}
                  phoneNumber={i.phoneNumber}
                  plus={i.plus}
                  minus={i.minus}
                  creationDate={i.creationDate}
                />
                <tr className='h-15' />
              </>
            ))}
          </tbody>
        ) : (
          <tbody>
            <td className='h-full'>
              <NoneList colspan={7} />
            </td>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default AppMemberManagementList;
