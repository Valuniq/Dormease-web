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
