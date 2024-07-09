// 'use client';
// import React from 'react';
// import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
// import ResignationDetail from '@/components/organisms/Resignation/ResignationDetail';

// const Page = () => {
//   return (
//     <div className='flex flex-col text-center w-[1200px] gap-35'>
//       <h1 className='H0 text-gray-grayscale50 text-nowrap'>퇴사확인서 확인</h1>
//       <div className='flex border-t-1 border-t-gray-grayscale50'>
//         <div className='flex-1 flex flex-col gap-60 py-60 pl-103 pr-134'>
//           <ResignationDetail label='이 름' value={'name'} />
//           <ResignationDetail label='학 과' value={'major'} />
//           <ResignationDetail label='학 번' value={'schoolNumber'} />
//           <ResignationDetail label='학 년' value={'grade' + '학년'} />
//           <ResignationDetail label='휴대전화' value={'phoneNumber'} />
//           <ResignationDetail label='건 물' value={'building'} />
//           <ResignationDetail label='보증금 환급 여부' value={'depositRefund' ? '지급' : '미지급'} />
//         </div>
//         <div className='flex-1 flex flex-col gap-60 bg-gray-grayscale5 py-60 pl-119 pr-112'>
//           <ResignationDetail label='호 실' value={'roomNumber'} />
//           <ResignationDetail label='침대번호' value={'bedNumber'} />
//           <ResignationDetail label='열쇠 수령 여부' value={'hasKey' ? 'O' : 'X'} />
//           <ResignationDetail label='열쇠번호' value={'keyNumber'} />
//           <ResignationDetail label='퇴실날짜' value={'exitDate'} />
//           <ResignationDetail label='은행명' value={'bankName'} />
//           <ResignationDetail label='계좌번호' value={'accountNumber'} />
//         </div>
//       </div>
//       <div>
//         <BtnMidVariant label='확인' disabled={false} variant='blue' />
//       </div>
//     </div>
//   );
// };

// export default Page;
import { Suspense } from 'react';
import ClientComponent from './ClientComponent'; // 클라이언트 컴포넌트 import

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

export async function generateStaticParams() {
  const ids = ['1', '2', '3']; // 예시 데이터
  return ids.map((id) => ({ id }));
}

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent id={params.id} />
    </Suspense>
  );
};

export default Page;
