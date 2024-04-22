import React from 'react';
import RefundListBody from './RefundListBody';

type Props = {
  clickSchoolNumber: string;
  onStudentClick: (schoolNumber: string) => void;
  list: {
    name: string;
    schoolNumber: string;
    phoneNumber: string;
    bankName: string;
    accountNumber: string;
    period: string;
    exitDate: string;
    applicationDate: string;
    building: string;
    room: string;
    bedNumber: string;
  }[];
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
        {list.map((data, index) => {
          const isLastItem = index === list.length - 1;
          return (
            <>
              <RefundListBody
                key={index}
                isLastItem={isLastItem}
                name={data.name}
                schoolNumber={data.schoolNumber}
                phoneNumber={data.phoneNumber}
                bankName={data.bankName}
                accountNumber={data.accountNumber}
                period={data.period}
                exitDate={data.exitDate}
                applicationDate={data.applicationDate}
                building={data.building}
                room={data.room}
                bedNumber={data.bedNumber}
                clickSchoolNumber={clickSchoolNumber}
                onStudentClick={onStudentClick}
              />
              {isLastItem && <div className='mt-13 border-b-1 border-gray-grayscale50'></div>}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RefundList;
