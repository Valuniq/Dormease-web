'use client';

import React, { useEffect, useState } from 'react';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import ApplicantList from '@/components/templates/Applicant/Applicant/ApplicantList';

interface ApplicantProps {
  id: string;
  name: string;
  studentId: string;
  gender: string;
  applicationBuilding: string;
  residence: string;
  certifiedFile: File;
  prioritySelection: File; // 수정된 타입
  assignedBuilding: string;
  isPassed: 'pass' | 'out' | 'movingPass';
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

async function fetchData(id: string): Promise<ApplicantProps> {
  // 실제 데이터를 가져오는 로직을 여기에 작성합니다.
  // 예: API 호출 또는 데이터베이스 쿼리 등
  return {
    id,
    name: 'John Doe',
    studentId: 'S123456',
    gender: 'Male',
    applicationBuilding: 'Building A',
    residence: 'Dormitory',
    certifiedFile: new File(['file content'], 'certifiedFile.pdf', { type: 'application/pdf' }),
    prioritySelection: new File(['file content'], 'prioritySelection.pdf', { type: 'application/pdf' }), // 수정된 부분
    assignedBuilding: 'Building B',
    isPassed: 'pass',
    isChecked: false,
    setIsChecked: () => {}, // 실제 구현 필요
  };
}

const ClientComponent: React.FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<ApplicantProps | null>(null);

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
    <div className='w-[1250px]'>
      <div className='flex justify-start'>
        <h1 className='H1 text-gray-grayscale50'>제목</h1>
      </div>
      <div className='flex justify-end mb-16'>
        <SearchTextBox
          input={''}
          setInput={function (input: string): void {
            // input 처리 로직
          }}
          placeholder={'검색어를 입력해주세요.'}
        />
      </div>
      <ApplicantList
        applicantLists={[data]}
        isAllChecked={false}
        setIsAllChecked={function (isAllChecked: boolean): void {
          // isAllChecked 처리 로직
        }}
      />
      <div className='mt-30'>
        <BackBtn label={'뒤로가기'} disabled={false} />
      </div>
    </div>
  );
};

export default ClientComponent;
