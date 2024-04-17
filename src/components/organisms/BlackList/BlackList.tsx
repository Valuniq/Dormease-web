import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';
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
    <div>
      <div className='w-[1305px] h-693 overflow-y-scroll border-b-1 border-b-gray-grayscale50'>
        <table className='w-full'>
          <thead className='w-full h-66 bg-white sticky top-0 z-1'>
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
              <div className='w-[1305px] h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </thead>
          {blackLists.length === 0 ? (
            <tbody className='h-354'>
              <tr>
                <td colSpan={8} className='text-center'>
                  <h1 className='H1 text-gray-grayscale30'>리스트가 비어있습니다.</h1>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr className='h-15' />
              {blackLists.map((i, index) => (
                <>
                  <tr key={index}>
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
                  </tr>
                  <tr className='h-15' />
                </>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default BlackList;
