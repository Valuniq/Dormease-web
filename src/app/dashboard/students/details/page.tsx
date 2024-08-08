'use client';
import React, { useState } from 'react';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import StudentManagement from '@/components/templates/Student/Management/StudentManagement';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BlackListBtn from '@/components/atoms/AllBtn/BlackListBtn/BlackListBtn';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';

const Page = () => {
  const router = useRouter();
  const setEditState = useSetRecoilState(editState);
  const [isEdit, setIsEdit] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);

  const [data, setData] = useState({
    name: '김김김',
    schoolNumber: '99999999',
    major: '산업디자인과',
    grade: 4,
    schoolStatus: '재학',
    gender: '남성',
    phoneNumber: '010-9999-9999',
    address: '서울특별시 서울도 서울구 서울로 서울특별시 서울도 서울구 서울로',
    certifiedFile: null,
    prioritySelection: null,
    foodCount: 50,
    isSmoking: true,
    dormitoryPayment: true,
    hasKey: false,
    bounsPoint: 9,
    minusPoint: 9,
    personalInfoConsent: true,
    thirdPartyConsent: true,
    bankName: '농협은행',
    accountNumber: '9999-99-999999',
    emergencyContact: '010-9999-9999',
    emergencyRelation: '부',
    building: '명덕관(4인실)',
    roomNumber: '999',
    bedNumber: '4',
    period: '6개월',
    isRoommateApplied: true,
    roommateInformation: '김김김김 이이이이 박박박박',
  });

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className='flex flex-col relative w-[1200px]'>
      <h3 className='H3 text-gray-grayscale50 text-center mb-6 w-[1200px]'>개인정보</h3>
      {!isEdit && (
        <div className='absolute right-0 -top-8'>
          <BtnMiniVariant
            label='수정'
            disabled={false}
            selected={false}
            variant='blue'
            onClick={() => {
              setEditState(true);
              setIsEdit(!isEdit);
            }}
          />
        </div>
      )}
      <div className='flex border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
        <div className='flex-1 flex flex-col pr-170'>
          <StudentManagement label='이름' text={data.name} value={data.name} />
          <StudentManagement label='학번' text={data.schoolNumber} value={data.schoolNumber} />
          <StudentManagement label='학과' text={data.major} value={data.major} />
          <StudentManagement label='학년' text={data.grade + '학년'} value={data.grade} />
          <StudentManagement label='학적' text={data.schoolStatus} value={data.schoolStatus} />
          <StudentManagement label='성별' text={data.gender} value={data.gender} />
          <StudentManagement label='휴대전화' text={data.phoneNumber} value={data.phoneNumber} />
          <StudentManagement label='본거주지' text={data.address} value={data.address} />
          <StudentManagement label='등본' isEdit={isEdit} type='file' text='파일이름' value={data.certifiedFile} />
          <StudentManagement
            label='우선선발'
            isEdit={isEdit}
            type='file'
            text='파일이름'
            value={data.prioritySelection}
          />
          <StudentManagement label='식수' text={data.foodCount + '식'} value={data.foodCount} />
        </div>
        <div className='flex-1 flex flex-col'>
          <StudentManagement right={isEdit} label='흡연여부' text={data.isSmoking ? 'O' : 'X'} value={data.isSmoking} />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='checkbox'
            label='생활관비 납부'
            text={data.dormitoryPayment ? 'O' : 'X'}
            value={data.dormitoryPayment}
            setIsChecked={(isChecked) => handleInputChange('dormitoryPayment', isChecked)}
          />
          <StudentManagement
            right={isEdit}
            label='열쇠 수령 여부'
            isEdit={isEdit}
            type='checkbox'
            text={data.hasKey ? '수령' : '미수령'}
            value={data.hasKey}
            setIsChecked={(isChecked) => handleInputChange('hasKey', isChecked)}
          />
          <StudentManagement right={isEdit} label='상점' text={data.bounsPoint} value={data.bounsPoint} />
          <StudentManagement right={isEdit} label='벌점' text={data.minusPoint} value={data.minusPoint} />
          <StudentManagement
            right={isEdit}
            label='개인정보 동의'
            text={data.personalInfoConsent ? 'O' : 'X'}
            value={data.personalInfoConsent}
          />
          <StudentManagement
            right={isEdit}
            label='제3자제공 동의'
            text={data.thirdPartyConsent ? 'O' : 'X'}
            value={data.thirdPartyConsent}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='은행명'
            text={data.bankName}
            value={data.bankName}
            input={data.bankName}
            setInput={(value) => handleInputChange('bankName', value)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='계좌번호'
            text={data.accountNumber}
            value={data.accountNumber}
            input={data.accountNumber}
            setInput={(value) => handleInputChange('accountNumber', value)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처'
            text={data.emergencyContact}
            value={data.emergencyContact}
            input={data.emergencyContact}
            setInput={(value) => handleInputChange('emergencyContact', value)}
          />
          <StudentManagement
            right={isEdit}
            isEdit={isEdit}
            type='string'
            label='비상연락처 관계'
            text={data.emergencyRelation}
            value={data.emergencyRelation}
            input={data.emergencyRelation}
            setInput={(value) => handleInputChange('emergencyRelation', value)}
          />
        </div>
      </div>
      <div className='flex flex-col h-213 mt-29 pt-12 bg-gray-grayscale5'>
        <h3 className='H3 text-gray-grayscale50 text-center mb-6 border-b-1 border-b-gray-grayscale50 pb-8'>
          기숙사 정보
        </h3>
        <div className='flex h-136'>
          <div className='flex-1 flex flex-col pr-170 pl-46'>
            <StudentManagement
              isEdit={isEdit}
              type='building'
              isBuilding={isBuilding}
              setIsBuilding={setIsBuilding}
              list={['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)']}
              select={data.building}
              setSelect={(value) => handleInputChange('building', value)}
              label='건물'
              text={data.building}
              value={data.building}
            />
            <StudentManagement
              isEdit={isEdit}
              type='roomNumber'
              label='호실'
              text={`${data.roomNumber}호`}
              value={data.roomNumber}
              input={data.roomNumber}
              setInput={(value) => handleInputChange('roomNumber', value)}
            />
            <StudentManagement
              isEdit={isEdit}
              type='bedNumber'
              label='침대번호'
              text={`${data.bedNumber}번`}
              value={data.bedNumber}
              input={data.bedNumber}
              setInput={(value) => handleInputChange('bedNumber', value)}
            />
          </div>
          <div className='flex-1 flex flex-col pr-46'>
            <StudentManagement label='거주기간' text={data.period} value={'period'} />
            <StudentManagement
              label='룸메이트 신청'
              text={data.isRoommateApplied ? 'O' : 'X'}
              value={data.isRoommateApplied}
            />
            <StudentManagement label='인원 정보' text={data.roommateInformation} value={data.roommateInformation} />
          </div>
        </div>
      </div>
      {isEdit && (
        <>
          <div className='relative mt-16'>
            <div className='flex gap-13 absolute right-0 -top-8'>
              <BlackListBtn label='블랙리스트' />
              <ResignBtn label='퇴사처리' />
            </div>
          </div>
          <div className='flex justify-center mt-9'>
            <BtnMidVariant
              label='수정완료'
              disabled={false}
              variant='blue'
              onClick={() => {
                setEditState(false);
                router.push(`/dashboard/students`);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
