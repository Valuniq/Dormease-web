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
    <table className='text-nowrap text-center text-gray-grayscale50 w-[1483px]'>
      <thead className='w-full'>
        <tr>
          <th className='H4 border-b-1 pb-15'>이 름</th>
          <th className='H4 border-b-1 pb-15'>학 번</th>
          <th className='H4 border-b-1 pb-15'>휴대전화</th>
          <th className='H4 border-b-1 pb-15'>은행명</th>
          <th className='H4 border-b-1 pb-15'>계좌번호</th>
          <th className='H4 border-b-1 pb-15'>기간</th>
          <th className='H4 border-b-1 pb-15'>퇴사 예정일</th>
          <th className='H4 border-b-1 pb-15'>신청날짜</th>
          <th className='H4 border-b-1 pb-15'>건 물</th>
          <th className='H4 border-b-1 pb-15'>호 실</th>
          <th className='H4 border-b-1 pb-15'>침대번호</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='w-full'>
        <tr className='h-15 relative' />
        {list.map((data, index) => {
          return (
            <>
              <RefundListBody
                key={index}
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
              <tr className='h-14' />
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default RefundList;
