import React from 'react';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import StudentManagementDetail from '@/components/organisms/StudentManagement/StudentManagementDetail';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BlackListBtn from '@/components/atoms/AllBtn/BlackListBtn/BlackListBtn';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';

type Props = {
  name: string;
  schoolNumber: string;
  major: string;
  grade: number;
  schoolStatus: string;
  gender: string;
  phoneNumber: string;
  address: string;
  certifiedFile: File | null;
  prioritySelection: File | null;
  foodCount: number;
  isSmoking: boolean;
  dormitoryPayment: boolean;
  hasKey: boolean;
  bounsPoint: number;
  minusPoint: number;
  personalInfoConsent: boolean;
  thirdPartyConsent: boolean;
  bankName: string;
  accountNumber: string;
  emergencyContact: string;
  emergencyRelation: string;

  building: string;
  roomNumber: number;
  bedNumber: number;
  period: string;
  isRoommateApplied: boolean;
  roommateInformation: string;

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
      <h3 className='H3 text-gray-grayscale50 text-center mb-6'>개인정보</h3>
      {!isEdit && (
        <div className='absolute right-0 -top-8'>
          <BtnMiniVariant label='수정' disabled={false} selected={false} variant='blue' />
        </div>
      )}
      <div className='flex border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
        <div className='flex-1 flex flex-col pr-170'>
          <StudentManagementDetail label='이름' text={name} value={name} />
          <StudentManagementDetail label='학번' text={schoolNumber} value={schoolNumber} />
          <StudentManagementDetail label='학과' text={major} value={major} />
          <StudentManagementDetail label='학년' text={grade + '학년'} value={grade} />
          <StudentManagementDetail label='학적' text={schoolStatus} value={schoolStatus} />
          <StudentManagementDetail label='성별' text={gender} value={gender} />
          <StudentManagementDetail label='휴대전화' text={phoneNumber} value={phoneNumber} />
          <StudentManagementDetail label='본거주지' text={address} value={address} />
          <StudentManagementDetail label='등본' isEdit={isEdit} type='file' text='파일이름' value={certifiedFile} />
          <StudentManagementDetail
            label='우선선발'
            isEdit={isEdit}
            type='file'
            text='파일이름'
            value={prioritySelection}
          />
          <StudentManagementDetail label='식수' text={foodCount + '식'} value={foodCount} />
        </div>
        <div className='flex-1 flex flex-col'>
          <StudentManagementDetail right={isEdit} label='흡연여부' text={isSmoking ? 'O' : 'X'} value={isSmoking} />
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
            text={personalInfoConsent ? 'O' : 'X'}
            value={personalInfoConsent}
          />
          <StudentManagementDetail
            right={isEdit}
            label='제3자제공 동의'
            text={thirdPartyConsent ? 'O' : 'X'}
            value={thirdPartyConsent}
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
              input='999'
              setInput={function (input: string): void {
                throw new Error('Function not implemented.');
              }}
              label='호실'
              text={roomNumber + '호'}
              value={roomNumber}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='bedNumber'
              input='4'
              setInput={function (input: string): void {
                throw new Error('Function not implemented.');
              }}
              label='침대번호'
              text={bedNumber + '번'}
              value={bedNumber}
            />
          </div>
          <div className='flex-1 flex flex-col pr-46'>
            <StudentManagementDetail label='거주기간' text={period} value={period} />
            <StudentManagementDetail
              label='룸메이트 신청'
              text={isRoommateApplied ? 'O' : 'X'}
              value={isRoommateApplied}
            />
            <StudentManagementDetail label='인원 정보' text={roommateInformation} value={roommateInformation} />
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

export default page;
