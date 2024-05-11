import React from 'react';
import StudentManagementDetail from '@/components/organisms/StudentManagement/StudentManagementDetail';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  name: string;
  schoolNumber: string | null;
  major: string | null;
  grade: number | null;
  schoolStatus: string | null;
  gender: string | null;
  phoneNumber: string | null;
  address: string | null;
  certifiedFile: File | null;
  prioritySelection: File | null;
  foodCount: number | null;
  isSmoking: boolean | null;
  dormitoryPayment: boolean | null;
  hasKey: boolean | null;
  bounsPoint: number | null;
  minusPoint: number | null;
  personalInfoConsent: boolean | null;
  thirdPartyConsent: boolean | null;
  bankName: string | null;
  accountNumber: string | null;
  emergencyContact: string | null;
  emergencyRelation: string | null;

  building: string | null;
  roomNumber: number | null;
  bedNumber: number | null;
  period: string | null;
  isRoommateApplied: boolean | null;
  roommateInformation: string | null;

  isEdit: boolean;
  isBuilding: boolean;
};

const page = ({
  name,
  schoolNumber,
  major,
  grade,
  schoolStatus,
  gender,
  phoneNumber,
  address,
  certifiedFile,
  prioritySelection,
  foodCount,
  isSmoking,
  dormitoryPayment,
  hasKey,
  bounsPoint,
  minusPoint,
  personalInfoConsent,
  thirdPartyConsent,
  bankName,
  accountNumber,
  emergencyContact,
  emergencyRelation,
  building,
  roomNumber,
  bedNumber,
  period,
  isRoommateApplied,
  roommateInformation,
  isEdit,
  isBuilding,
}: Props) => {
  return (
    <div className='flex flex-col relative w-[1200px]'>
      <h3 className='H3 text-gray-grayscale50 text-center mb-6'>사생 추가 상세 내용</h3>
      <div className='flex border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
        <div className='flex-1 flex flex-col pr-170'>
          <StudentManagementDetail
            label='이름'
            isEdit={isEdit}
            type='string'
            text={name}
            value={name}
            input={name}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='학번'
            isEdit={isEdit}
            type='string'
            text={schoolNumber}
            value={schoolNumber}
            input={schoolNumber}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='학과'
            isEdit={isEdit}
            type='string'
            text={major}
            value={major}
            input={major}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='학년'
            isEdit={isEdit}
            type='string'
            text={grade + '학년'}
            value={grade}
            input={grade?.toString()}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='학적'
            isEdit={isEdit}
            type='string'
            text={schoolStatus}
            value={schoolStatus}
            input={schoolStatus}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='성별'
            isEdit={isEdit}
            type='radio'
            text={gender}
            value={gender ? gender : '남성'}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='휴대전화'
            isEdit={isEdit}
            type='string'
            text={phoneNumber}
            value={phoneNumber}
            input={phoneNumber}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            label='본거주지'
            isEdit={isEdit}
            type='string'
            text={address}
            value={address}
            input={address}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail label='등본' isEdit={isEdit} type='file' text='' value={certifiedFile} />
          <StudentManagementDetail label='우선선발' isEdit={isEdit} type='file' text='' value={prioritySelection} />
          <StudentManagementDetail
            isEdit={isEdit}
            type='string'
            label='식수'
            text={foodCount + '식'}
            value={foodCount}
            input={foodCount?.toString()}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='checkbox'
            label='흡연여부'
            text={isSmoking ? 'O' : 'X'}
            value={isSmoking}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='checkbox'
            label='생활관비 납부'
            text={dormitoryPayment ? 'O' : 'X'}
            value={dormitoryPayment}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            label='열쇠 수령 여부'
            isEdit={isEdit}
            type='checkbox'
            text={hasKey ? '수령' : '미수령'}
            value={hasKey}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail right={isEdit} label='상점' text={bounsPoint} value={bounsPoint} />
          <StudentManagementDetail right={isEdit} label='벌점' text={minusPoint} value={minusPoint} />
          <StudentManagementDetail
            right={isEdit}
            label='개인정보 동의'
            isEdit={isEdit}
            type='checkbox'
            text={personalInfoConsent ? 'O' : 'X'}
            value={personalInfoConsent}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            label='제3자제공 동의'
            isEdit={isEdit}
            type='checkbox'
            text={thirdPartyConsent ? 'O' : 'X'}
            value={thirdPartyConsent}
            setIsChecked={function (isChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='은행명'
            text={bankName}
            value={bankName}
            input={bankName}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='계좌번호'
            text={accountNumber}
            value={accountNumber}
            input={accountNumber}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처'
            text={emergencyContact}
            value={emergencyContact}
            input={emergencyContact}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StudentManagementDetail
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처 관계'
            text={emergencyRelation}
            value={emergencyRelation}
            input={emergencyRelation}
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
              isBuilding={isBuilding}
              list={['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)']}
              select='명덕관(4인실)'
              setSelect={function (select: string): void {
                throw new Error('Function not implemented.');
              }}
              label='건물'
              text={building}
              value={building}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='roomNumber'
              label='호실'
              text={roomNumber + '호'}
              value={roomNumber}
              input={roomNumber?.toString()}
              setInput={function (input: string): void {
                throw new Error('Function not implemented.');
              }}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='bedNumber'
              label='침대번호'
              text={bedNumber + '번'}
              value={bedNumber}
              input={bedNumber?.toString()}
              setInput={function (input: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
          <div className='flex-1 flex flex-col pr-46'>
            <StudentManagementDetail
              isEdit={isEdit}
              type='string'
              label='거주기간'
              text={period}
              value={period}
              input={period}
              setInput={function (id: string): void {
                throw new Error('Function not implemented.');
              }}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='checkbox'
              label='룸메이트 신청'
              text={isRoommateApplied ? 'O' : 'X'}
              value={isRoommateApplied}
              setIsChecked={function (isChecked: boolean): void {
                throw new Error('Function not implemented.');
              }}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='string'
              label='인원 정보'
              text={roommateInformation}
              value={roommateInformation}
              input={roommateInformation}
              setInput={function (id: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-25'>
        <BtnMidVariant label='생성하기' disabled={false} variant='blue' />
      </div>
    </div>
  );
};

export default page;
