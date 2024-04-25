import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';
import NoneList from '../NoneList/NoneList';
import BlackListBody, { Props as BlackListBodyType } from './BlackListBody';

type Props = {
  blackLists: BlackListBodyType[];
  isAllChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
};

const BlackList = ({ blackLists, isAllChecked, setIsAllChecked, isEdit, setIsEdit }: Props) => {
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>번호</th>
            <th className='H4'>이름</th>
            <th className='H4'>학번</th>
            <th className='H4'>전화번호</th>
            <th className='H4'>벌점</th>
            <th className='H4'>사유</th>
            <th className='H4'>등록일자</th>
            <th>
              <div className='H4 flex  items-center justify-center text-center w-full'>
                <h1 className='mr-4'>전체</h1>
                <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
              </div>
            </th>
          </tr>
          <th colSpan={8}>
            <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
          </th>
        </thead>
        <tbody className='overflow-y-scroll'>
          {blackLists && blackLists.length > 0 ? (
            <>
              <tr className='h-15' />
              {blackLists.map((i) => (
                <>
                  <BlackListBody
                    index={i.index}
                    name={i.name}
                    studentId={i.studentId}
                    phoneNumber={i.phoneNumber}
                    minus={i.minus}
                    reason={i.reason}
                    setReason={i.setReason}
                    registrationDate={i.registrationDate}
                    isChecked={i.isChecked}
                    setIsChecked={i.setIsChecked}
                    isEdit={isEdit}
                  />
                  <tr className='h-15' />
                </>
              ))}
            </>
          ) : (
            <td colSpan={8}>
              <NoneList />
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BlackList;
