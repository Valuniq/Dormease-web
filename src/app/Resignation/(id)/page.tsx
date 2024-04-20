import React from 'react';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import ResignationDetail from '@/components/organisms/Resignation/ResignationDetail';

type Props = {
  name: string;
  major: string;
  schoolNumber: string;
  grade: number;
  phoneNumber: string;
  building: string;
  depositRefund: boolean;
  roomNumber: string;
  bedNumber: string;
  hasKey: boolean;
  keyNumber: string;
  exitDate: string;
  bankName: string;
  accountNumber: string;
};

const page = ({
  name,
  major,
  schoolNumber,
  grade,
  phoneNumber,
  building,
  depositRefund,
  roomNumber,
  bedNumber,
  hasKey,
  keyNumber,
  exitDate,
  bankName,
  accountNumber,
}: Props) => {
  return (
    <div className='flex flex-col text-center w-[1200px] gap-35'>
      <h1 className='H0 text-gray-grayscale50 text-nowrap'>퇴사확인서 확인</h1>
      <div className='flex border-t-1 border-t-gray-grayscale50'>
        <div className='flex-1 flex flex-col gap-60 py-60 pl-103 pr-134'>
          <ResignationDetail label='이 름' value={name} />
          <ResignationDetail label='학 과' value={major} />
          <ResignationDetail label='학 번' value={schoolNumber} />
          <ResignationDetail label='학 년' value={grade + '학년'} />
          <ResignationDetail label='휴대전화' value={phoneNumber} />
          <ResignationDetail label='건 물' value={building} />
          <ResignationDetail label='보증금 환급 여부' value={depositRefund ? '지급' : '미지급'} />
        </div>
        <div className='flex-1 flex flex-col gap-60 bg-gray-grayscale5 py-60 pl-119 pr-112'>
          <ResignationDetail label='호 실' value={roomNumber} />
          <ResignationDetail label='침대번호' value={bedNumber} />
          <ResignationDetail label='열쇠 수령 여부' value={hasKey ? 'O' : 'X'} />
          <ResignationDetail label='열쇠번호' value={keyNumber} />
          <ResignationDetail label='퇴실날짜' value={exitDate} />
          <ResignationDetail label='은행명' value={bankName} />
          <ResignationDetail label='계좌번호' value={accountNumber} />
        </div>
      </div>
      <div>
        <BtnMidVariant label='확인' disabled={false} variant='blue' />
      </div>
    </div>
  );
};

export default page;
