import Image from 'next/image';
import React from 'react';
import SortImg from '@public/images/DropDownBtn.png';
import AppMemberManagementListBody, { Props as AppMemberManagementListBodyType } from './AppMemberManagementListBody';

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
    <div>
      <div className='w-[1250px] h-693 overflox-y-scroll border-b-1 border-b-gray-grayscale50'>
        <table className='w-full'>
          <thead className='border-b-1 border-b-gray-grayscale50'>
            <tr className='text-gray-grayscale50'>
              <th className='H4'>번호</th>
              <th className='H4'>이름</th>
              <th className='H4'>학번</th>
              <th className='H4'>휴대전화</th>
              <th className='H4'>개인정보 동의</th>
              <th className='H4'>제3자정보제공</th>
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
            <tr className='h-18' />
          </thead>
          <tbody className=''>
            <tr className='h-15' />
            {appMemberManagementLists.map((i, index) => (
              <>
                <tr key={index}>
                  <AppMemberManagementListBody
                    index={i.index}
                    name={i.name}
                    studentId={i.studentId}
                    phoneNumber={i.phoneNumber}
                    personalAgree={i.personalAgree}
                    thirdAgree={i.thirdAgree}
                    plus={i.plus}
                    minus={i.minus}
                    creationDate={i.creationDate}
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

export default AppMemberManagementList;
