'use client';

import React, { useEffect, useState } from 'react';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import StudentManagementDetail from '@/components/organisms/StudentManagement/StudentManagementDetail';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BlackListBtn from '@/components/atoms/AllBtn/BlackListBtn/BlackListBtn';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';

interface StudentProps {
  id: string;
  name: string;
  studentId: string;
  major: string;
  grade: number;
  academicStatus: string;
  gender: string;
  phoneNumber: string;
  residence: string;
  certifiedFile: File;
  prioritySelection: File;
  meals: number;
  isSmoking: boolean;
  dormitoryPayment: boolean;
  hasKey: boolean;
  personalInfoConsent: boolean;
  thirdPartyConsent: boolean;
  bankName: string;
  accountNumber: string;
  emergencyContact: string;
  emergencyRelation: string;
  building: string;
  roomNumber: string;
  bedNumber: string;
  period: string;
  isRoommateApplied: boolean;
  roommateInformation: string;
}

async function fetchData(id: string): Promise<StudentProps> {
  // 실제 데이터를 가져오는 로직을 여기에 작성합니다.
  // 예: API 호출 또는 데이터베이스 쿼리 등
  return {
    id,
    name: 'John Doe',
    studentId: 'S123456',
    major: 'Computer Science',
    grade: 3,
    academicStatus: 'Active',
    gender: 'Male',
    phoneNumber: '010-1234-5678',
    residence: 'Seoul',
    certifiedFile: new File(['file content'], 'certifiedFile.pdf', { type: 'application/pdf' }),
    prioritySelection: new File(['file content'], 'prioritySelection.pdf', { type: 'application/pdf' }),
    meals: 3,
    isSmoking: false,
    dormitoryPayment: true,
    hasKey: true,
    personalInfoConsent: true,
    thirdPartyConsent: false,
    bankName: 'Bank of Korea',
    accountNumber: '123-456-7890',
    emergencyContact: '010-9876-5432',
    emergencyRelation: 'Father',
    building: 'Building A',
    roomNumber: '101',
    bedNumber: '1',
    period: '2023-01-01 to 2023-12-31',
    isRoommateApplied: true,
    roommateInformation: 'Roommate Info',
  };
}

const ClientComponent: React.FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<StudentProps | null>(null);

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

  const isEdit = false;

  return (
    <div className='flex flex-col relative w-[1200px]'>
      <h3 className='H3 text-gray-grayscale50 text-center mb-6'>개인정보</h3>
      {!isEdit && (
        <div className='absolute right-0 -top-8'>
          <BtnMiniVariant label='수정' disabled={false} selected={false} variant='blue' />
        </div>
      )}
      <div className='flex border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
        <div className='flex-1 flex flex-col pr-170'>
          <StudentManagementDetail label='이름' text={data.name} value={data.name} />
          <StudentManagementDetail label='학번' text={data.studentId} value={data.studentId} />
          <StudentManagementDetail label='학과' text={data.major} value={data.major} />
          <StudentManagementDetail label='학년' text={`${data.grade}학년`} value={data.grade} />
          <StudentManagementDetail label='학적' text={data.academicStatus} value={data.academicStatus} />
          <StudentManagementDetail label='성별' text={data.gender} value={data.gender} />
          <StudentManagementDetail label='휴대전화' text={data.phoneNumber} value={data.phoneNumber} />
          <StudentManagementDetail label='본거주지' text={data.residence} value={data.residence} />
          <StudentManagementDetail label='등본' isEdit={isEdit} type='file' text='파일이름' value={null} />
          <StudentManagementDetail label='우선선발' isEdit={isEdit} type='file' text='파일이름' value={null} />
          <StudentManagementDetail label='식수' text={`${data.meals}식`} value={data.meals} />
        </div>
        <div className='flex-1 flex flex-col'>
          <StudentManagementDetail
            right={isEdit}
            label='흡연여부'
            text={data.isSmoking ? 'O' : 'X'}
            value={data.isSmoking}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='checkbox'
            label='생활관비 납부'
            text={data.dormitoryPayment ? 'O' : 'X'}
            value={data.dormitoryPayment}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            label='열쇠 수령 여부'
            isEdit={isEdit}
            type='checkbox'
            text={data.hasKey ? '수령' : '미수령'}
            value={data.hasKey}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail right={isEdit} label='상점' text={1} value={1} />
          <StudentManagementDetail right={isEdit} label='벌점' text={1} value={1} />
          <StudentManagementDetail
            right={isEdit}
            label='개인정보 동의'
            text={data.personalInfoConsent ? 'O' : 'X'}
            value={data.personalInfoConsent}
          />
          <StudentManagementDetail
            right={isEdit}
            label='제3자제공 동의'
            text={data.thirdPartyConsent ? 'O' : 'X'}
            value={data.thirdPartyConsent}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='은행명'
            text={data.bankName}
            value={data.bankName}
            input={data.bankName}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='계좌번호'
            text={data.accountNumber}
            value={data.accountNumber}
            input={data.accountNumber}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처'
            text={data.emergencyContact}
            value={data.emergencyContact}
            input={data.emergencyContact}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처 관계'
            text={data.emergencyRelation}
            value={data.emergencyRelation}
            input={data.emergencyRelation}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
      </div>
      <div className='flex flex-col h-213 mt-29 pt-12 bg-gray-grayscale5'>
        <h3 className='H3 text-gray-grayscale50 text-center mb-6 border-b-1 border-b-gray-grayscale50 pb-8'>
          기숙사 정보
        </h3>
        <div className='flex h-136'>
          <div className='flex-1 flex flex-col pr-170 pl-46'>
            <StudentManagementDetail
              isEdit={isEdit}
              type='building'
              isBuilding={false}
              list={['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)']}
              select='명덕관(4인실)'
              setSelect={function (select: string): void {
                throw new Error('Function not implemented.');
              }}
              label='건물'
              text={data.building}
              value={data.building}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='roomNumber'
              input={data.roomNumber}
              setInput={function (input: string): void {
                throw new Error('Function not implemented.');
              }}
              label='호실'
              text={`${data.roomNumber}호`}
              value={data.roomNumber}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='bedNumber'
              input={data.bedNumber}
              setInput={function (input: string): void {
                throw new Error('Function not implemented.');
              }}
              label='침대번호'
              text={`${data.bedNumber}번`}
              value={data.bedNumber}
            />
          </div>
          <div className='flex-1 flex flex-col pr-46'>
            <StudentManagementDetail label='거주기간' text={data.period} value={data.period} />
            <StudentManagementDetail
              label='룸메이트 신청'
              text={data.isRoommateApplied ? 'O' : 'X'}
              value={data.isRoommateApplied}
            />
            <StudentManagementDetail
              label='인원 정보'
              text={data.roommateInformation}
              value={data.roommateInformation}
            />
          </div>
        </div>
      </div>
      <div className='relative mt-16'>
        <div className='flex gap-13 absolute right-0 -top-8'>
          <BlackListBtn label='블랙리스트' />
          <ResignBtn label='퇴사처리' />
        </div>
      </div>
      <div className='flex justify-center mt-9'>
        <BtnMidVariant label='수정완료' disabled={false} variant='blue' />
      </div>
    </div>
  );
};

export default ClientComponent;
