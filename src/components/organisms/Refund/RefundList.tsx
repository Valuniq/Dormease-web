import React from 'react';
import RefundListBody from './RefundListBody';
import NoneList from '../NoneList/NoneList';
import { RefundRequestmentResponseDataList } from '@/types/refund';

type Props = {
  clickSchoolNumber: number;
  onStudentClick: (schoolNumber: number) => void;
  list: RefundRequestmentResponseDataList[];
};

const RefundList = ({ list, clickSchoolNumber, onStudentClick }: Props) => {
  return (
    <div className='text-nowrap text-center text-gray-grayscale50 c'>
      <div className='flex w-full border-b-1 pb-15'>
        <div className='H4 w-[6%]'>이 름</div>
        <div className='H4 w-[10%]'>학 번</div>
        <div className='H4 w-[12%]'>휴대전화</div>
        <div className='H4 w-[8%]'>은행명</div>
        <div className='H4 w-[12%]'>계좌번호</div>
        <div className='H4 w-[8%]'>기간</div>
        <div className='H4 w-[9%]'>퇴사 예정일</div>
        <div className='H4 w-[9%]'>신청날짜</div>
        <div className='H4 w-[12%]'>건 물</div>
        <div className='H4 w-[7%]'>호 실</div>
        <div className='H4 w-[7%]'>침대번호</div>
      </div>
      <div className='w-full'>
        {list ? (
          <>
            {list.map((data, index) => {
              const isLastItem = index === list.length - 1;
              return (
                <>
                  <RefundListBody
                    key={index}
                    isLastItem={isLastItem}
                    refundRequestmentId={data.refundRequestmentId}
                    residentName={data.residentName}
                    studentNumber={data.studentNumber}
                    phoneNumber={data.phoneNumber}
                    bankName={data.bankName}
                    accountNumber={data.accountNumber}
                    term={data.term}
                    exitDate={data.exitDate}
                    createDate={data.createDate}
                    dormitoryName={data.dormitoryName}
                    roomNumber={data.roomNumber}
                    bedNumber={data.bedNumber}
                    clickSchoolNumber={clickSchoolNumber}
                    onStudentClick={onStudentClick}
                  />
                  {isLastItem && <div className='mt-13 border-b-1 border-gray-grayscale50'></div>}
                </>
              );
            })}
          </>
        ) : (
          <div className='h-600'>
            <NoneList />
          </div>
        )}
      </div>
    </div>
  );
};

export default RefundList;
