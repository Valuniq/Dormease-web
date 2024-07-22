'use client';
import React, { useState } from 'react';
import StudentManagementDetail from '@/components/organisms/StudentManagement/StudentManagementDetail';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';

const Page = () => {
  const [input, setInput] = useState({
    name: '',
    schoolNumber: '',
    major: '',
    grade: null,
    schoolStatus: '',
    gender: 'MALE',
    phoneNumber: '',
    address: '',
    certifiedFile: null,
    prioritySelection: null,
    foodCount: null,
    isSmoking: false,
    dormitoryPayment: false,
    hasKey: false,
    bounsPoint: 0,
    minusPoint: 0,
    personalInfoConsent: false,
    thirdPartyConsent: false,
    bankName: '',
    accountNumber: '',
    emergencyContact: '',
    emergencyRelation: '',
    building: '',
    roomNumber: null,
    bedNumber: null,
    period: '',
    isRoommateApplied: false,
    roommateInformation: '',
  });
  const isEdit = true;
  const [isBuilding, setIsBuilding] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const router = useRouter();
  const setEditState = useSetRecoilState(editState);

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setInput((prevInput) => ({
      ...prevInput,
      [field]: value,
    }));
  };

  return (
    <>
      <div className='flex flex-col relative w-[1200px]'>
        <h3 className='H3 text-gray-grayscale50 text-center mb-6 w-[1200px]'>사생 추가 상세 내용</h3>
        <div className='flex border-t-1 border-t-gray-grayscale50 pt-31 px-46 h-590'>
          <div className='flex-1 flex flex-col pr-170'>
            <StudentManagementDetail
              label='이름'
              isEdit={isEdit}
              type='string'
              text={input.name}
              value={input.name}
              input={input.name}
              setInput={(value) => handleInputChange('name', value)}
            />
            <StudentManagementDetail
              label='학번'
              isEdit={isEdit}
              type='string'
              text={input.schoolNumber}
              value={input.schoolNumber}
              input={input.schoolNumber}
              setInput={(value) => handleInputChange('schoolNumber', value)}
            />
            <StudentManagementDetail
              label='학과'
              isEdit={isEdit}
              type='string'
              text={input.major}
              value={input.major}
              input={input.major}
              setInput={(value) => handleInputChange('major', value)}
            />
            <StudentManagementDetail
              label='학년'
              isEdit={isEdit}
              type='string'
              text={`${input.grade}학년`}
              value={input.grade}
              input={input.grade}
              setInput={(value) => handleInputChange('grade', value)}
            />
            <StudentManagementDetail
              label='학적'
              isEdit={isEdit}
              type='string'
              text={input.schoolStatus}
              value={input.schoolStatus}
              input={input.schoolStatus}
              setInput={(value) => handleInputChange('schoolStatus', value)}
            />
            <StudentManagementDetail
              label='성별'
              isEdit={isEdit}
              type='radio'
              text={input.gender}
              value={input.gender}
              setIsOn={(isOn) => handleInputChange('gender', isOn ? 'MALE' : 'FEMALE')}
            />
            <StudentManagementDetail
              label='휴대전화'
              isEdit={isEdit}
              type='string'
              text={input.phoneNumber}
              value={input.phoneNumber}
              input={input.phoneNumber}
              setInput={(value) => handleInputChange('phoneNumber', value)}
            />
            <StudentManagementDetail
              label='본거주지'
              isEdit={isEdit}
              type='string'
              text={input.address}
              value={input.address}
              input={input.address}
              setInput={(value) => handleInputChange('address', value)}
            />
            <StudentManagementDetail label='등본' isEdit={isEdit} type='file' text='' value={input.certifiedFile} />
            <StudentManagementDetail
              label='우선선발'
              isEdit={isEdit}
              type='file'
              text=''
              value={input.prioritySelection}
            />
            <StudentManagementDetail
              isEdit={isEdit}
              type='string'
              label='식수'
              text={`${input.foodCount}식`}
              value={input.foodCount}
              input={input.foodCount}
              setInput={(value) => handleInputChange('foodCount', Number(value))}
            />
          </div>
          <div className='flex-1 flex flex-col'>
            <StudentManagementDetail
              right={isEdit}
              isEdit={isEdit}
              type='checkbox'
              label='흡연여부'
              text={input.isSmoking ? 'O' : 'X'}
              value={input.isSmoking}
              setIsChecked={(isChecked) => handleInputChange('isSmoking', isChecked)}
            />
            <StudentManagementDetail
              right={isEdit}
              isEdit={isEdit}
              type='checkbox'
              label='생활관비 납부'
              text={input.dormitoryPayment ? 'O' : 'X'}
              value={input.dormitoryPayment}
              setIsChecked={(isChecked) => handleInputChange('dormitoryPayment', isChecked)}
            />
            <StudentManagementDetail
              right={isEdit}
              label='열쇠 수령 여부'
              isEdit={isEdit}
              type='checkbox'
              text={input.hasKey ? '수령' : '미수령'}
              value={input.hasKey}
              setIsChecked={(isChecked) => handleInputChange('hasKey', isChecked)}
            />
            <StudentManagementDetail right={isEdit} label='상점' text={input.bounsPoint} value={input.bounsPoint} />
            <StudentManagementDetail right={isEdit} label='벌점' text={input.minusPoint} value={input.minusPoint} />
            <StudentManagementDetail
              right={isEdit}
              label='개인정보 동의'
              isEdit={isEdit}
              type='checkbox'
              text={input.personalInfoConsent ? 'O' : 'X'}
              value={input.personalInfoConsent}
              setIsChecked={(isChecked) => handleInputChange('personalInfoConsent', isChecked)}
            />
            <StudentManagementDetail
              right={isEdit}
              label='제3자제공 동의'
              isEdit={isEdit}
              type='checkbox'
              text={input.thirdPartyConsent ? 'O' : 'X'}
              value={input.thirdPartyConsent}
              setIsChecked={(isChecked) => handleInputChange('thirdPartyConsent', isChecked)}
            />
            <StudentManagementDetail
              right={isEdit}
              isEdit={isEdit}
              type='string'
              label='은행명'
              text={input.bankName}
              value={input.bankName}
              input={input.bankName}
              setInput={(value) => handleInputChange('bankName', value)}
            />
            <StudentManagementDetail
              right={isEdit}
              isEdit={isEdit}
              type='string'
              label='계좌번호'
              text={input.accountNumber}
              value={input.accountNumber}
              input={input.accountNumber}
              setInput={(value) => handleInputChange('accountNumber', value)}
            />
            <StudentManagementDetail
              right={isEdit}
              isEdit={isEdit}
              type='string'
              label='비상연락처'
              text={input.emergencyContact}
              value={input.emergencyContact}
              input={input.emergencyContact}
              setInput={(value) => handleInputChange('emergencyContact', value)}
            />
            <StudentManagementDetail
              right={isEdit}
              isEdit={isEdit}
              type='string'
              label='비상연락처 관계'
              text={input.emergencyRelation}
              value={input.emergencyRelation}
              input={input.emergencyRelation}
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
              <StudentManagementDetail
                isEdit={isEdit}
                type='building'
                isBuilding={isBuilding}
                setIsBuilding={setIsBuilding}
                list={['명덕관(4인실)', '명덕관(2인실)', '명덕관(3인실)', '명덕관(1인실)']}
                select={input.building}
                setSelect={(value) => handleInputChange('building', value)}
                label='건물'
                text={input.building}
                value={input.building}
              />
              <StudentManagementDetail
                isEdit={isEdit}
                type='roomNumber'
                label='호실'
                text={`${input.roomNumber}호`}
                value={input.roomNumber}
                input={input.roomNumber}
                setInput={(value) => handleInputChange('roomNumber', value)}
              />
              <StudentManagementDetail
                isEdit={isEdit}
                type='bedNumber'
                label='침대번호'
                text={`${input.bedNumber}번`}
                value={input.bedNumber}
                input={input.bedNumber}
                setInput={(value) => handleInputChange('bedNumber', value)}
              />
            </div>
            <div className='flex-1 flex flex-col pr-46'>
              <StudentManagementDetail
                isEdit={isEdit}
                type='string'
                label='거주기간'
                text={input.period}
                value={input.period}
                input={input.period}
                setInput={(value) => handleInputChange('period', value)}
              />
              <StudentManagementDetail
                isEdit={isEdit}
                type='checkbox'
                label='룸메이트 신청'
                text={input.isRoommateApplied ? 'O' : 'X'}
                value={input.isRoommateApplied}
                setIsChecked={(isChecked) => handleInputChange('isRoommateApplied', isChecked)}
              />
              <StudentManagementDetail
                isEdit={isEdit}
                type='string'
                label='인원 정보'
                text={input.roommateInformation}
                value={input.roommateInformation}
                input={input.roommateInformation}
                setInput={(value) => handleInputChange('roommateInformation', value)}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-25'>
          <BtnMidVariant
            label='생성하기'
            disabled={!input.name || !input.period}
            variant='blue'
            onClick={() => {
              setCreateModal(!createModal);
            }}
          />
        </div>
      </div>
      {createModal && (
        <BackDrop isOpen={createModal}>
          <ConfirmPrompt
            variant='blue'
            label='생성을 완료하시겠습니까?'
            onCancel={() => {
              setCreateModal(false);
            }}
            onConfirm={() => {
              setEditState(false);
              router.push(`/dashboard/StudentManagement`);
            }}
          />
        </BackDrop>
      )}
    </>
  );
};

export default Page;
