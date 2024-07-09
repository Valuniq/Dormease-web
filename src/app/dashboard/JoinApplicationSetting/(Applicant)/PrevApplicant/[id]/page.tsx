// 'use client';
// import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
// import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
// import ApplicantList from '@/components/organisms/Applicant/ApplicantList';
// import React from 'react';

// const Page = () => {
//   return (
//     <div className='w-[1250px]'>
//       <div className='flex justify-start'>
//         <h1 className='H1 text-gray-grayscale50'>제목</h1>
//       </div>
//       <div className='flex justify-end mb-16'>
//         <SearchTextBox
//           input={''}
//           setInput={function (id: string): void {
//             throw new Error('Function not implemented.');
//           }}
//           placeholder={'검색어를 입력해주세요.'}
//         />
//       </div>
//       <ApplicantList
//         applicantLists={[]}
//         isAllChecked={false}
//         setIsAllChecked={function (isAllChecked: boolean): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//       <div className='mt-30'>
//         <BackBtn label={'뒤로가기'} disabled={false} />
//       </div>
//     </div>
//   );
// };

// export default Page;
import { Suspense } from 'react';
import ClientComponent from './ClientComponent'; // 클라이언트 컴포넌트 import

interface ApplicantProps {
  id: string;
  name: string;
  major: string;
  schoolNumber: string;
  grade: number;
  phoneNumber: string;
  building: string;
}

async function fetchData(id: string): Promise<ApplicantProps> {
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
