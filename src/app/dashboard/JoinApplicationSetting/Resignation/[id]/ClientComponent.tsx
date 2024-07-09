'use client';

import React, { useEffect, useState } from 'react';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import ResignationDetail from '@/components/organisms/Resignation/ResignationDetail';

interface ResignationProps {
  id: string;
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
}

async function fetchData(id: string): Promise<ResignationProps> {
  // 실제 데이터를 가져오는 로직을 여기에 작성합니다.
  // 예: API 호출 또는 데이터베이스 쿼리 등
  return {
    id,
    name: 'John Doe',
    major: 'Computer Science',
    schoolNumber: '123456',
    grade: 3,
    phoneNumber: '010-1234-5678',
    building: 'Building A',
    depositRefund: true,
    roomNumber: '101',
    bedNumber: 'A1',
    hasKey: true,
    keyNumber: 'Key-123',
    exitDate: '2023-12-31',
    bankName: 'Bank of Korea',
    accountNumber: '123-456-7890',
  };
}

const ClientComponent: React.FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<ResignationProps | null>(null);

  useEffect(() => {
    async function loadData() {
      const fetchedData = await fetchData(id);
      setData(fetchedData);
    }
    loadData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col text-center w-[1200px] gap-35'>
      <h1 className='H0 text-gray-grayscale50 text-nowrap'>퇴사확인서 확인</h1>
      <div className='flex border-t-1 border-t-gray-grayscale50'>
        <div className='flex-1 flex flex-col gap-60 py-60 pl-103 pr-134'>
          <ResignationDetail label='이 름' value={data.name} />
          <ResignationDetail label='학 과' value={data.major} />
          <ResignationDetail label='학 번' value={data.schoolNumber} />
          <ResignationDetail label='학 년' value={data.grade + '학년'} />
          <ResignationDetail label='휴대전화' value={data.phoneNumber} />
          <ResignationDetail label='건 물' value={data.building} />
          <ResignationDetail label='보증금 환급 여부' value={data.depositRefund ? '지급' : '미지급'} />
        </div>
        <div className='flex-1 flex flex-col gap-60 bg-gray-grayscale5 py-60 pl-119 pr-112'>
          <ResignationDetail label='호 실' value={data.roomNumber} />
          <ResignationDetail label='침대번호' value={data.bedNumber} />
          <ResignationDetail label='열쇠 수령 여부' value={data.hasKey ? 'O' : 'X'} />
          <ResignationDetail label='열쇠번호' value={data.keyNumber} />
          <ResignationDetail label='퇴실날짜' value={data.exitDate} />
          <ResignationDetail label='은행명' value={data.bankName} />
          <ResignationDetail label='계좌번호' value={data.accountNumber} />
        </div>
      </div>
      <div>
        <BtnMidVariant label='확인' disabled={false} variant='blue' />
      </div>
    </div>
  );
};

export default ClientComponent;
