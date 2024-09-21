'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Overlay from './Overlay';
import edit from '@public/images/Edit.png';
import grayLogo from '@public/logo/GrayLogo.png';
import { RES_ACCOUNTS } from '@/constants/restrictions';
import { putAdminAccountName } from '@/apis/account';
import { mutate } from 'swr';
import { BASE_URL } from '@/constants/path';

type Props = {
  id: string;
  name: string;
  isActive: boolean;
  isEditMode: boolean;
  setIsEditMode: () => void;
};

const ManagerNameBox = ({ id, name, isActive, isEditMode, setIsEditMode }: Props) => {
  const [newName, setNewName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 이름 변경 처리
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = async () => {
    if (newName.length > 0) {
      try {
        setIsSubmitting(true);
        await putAdminAccountName(newName);
        // 성공적으로 변경되면 SWR 캐시를 업데이트
        mutate(`${BASE_URL}/api/v1/web/admin/account`);
        setIsEditMode(); // 수정 모드 종료
      } catch (error) {
        console.error('이름 변경 중 오류가 발생했습니다.', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className='relative w-333 h-366 rounded-10 bg-gray-grayscale5 flex flex-col items-start pt-20 pl-16'>
      <Overlay isActive={isActive} />
      {isEditMode ? (
        <>
          <div className='mb-52 pl-14'>
            <div className='flex items-center mb-27'>
              <span className='caption-1 text-gray-grayscale40 mr-170'>아이디</span>
              <button
                onClick={setIsEditMode}
                className='w-68 h-30 rounded-10 bg-red-red10 text-white caption-1 flex items-center justify-center'
              >
                취소
              </button>
            </div>
            <p className='H3 text-gray-grayscale50 ml-8'>{id}</p>
          </div>
          <div className='flex flex-col items-start justify-between mb-33'>
            <span className='caption-1 text-gray-grayscale40 pl-14'>관리자명</span>
            <div className='flex items-center gap-20 mt-15'>
              <input
                type='text'
                value={newName}
                onChange={handleNameChange}
                placeholder={name}
                className='w-183 h-50 rounded-10 bg-white outline-none H3 placeholder:text-gray-grayscale30 text-gray-grayscale50 pl-18'
              />
              <button
                onClick={handleSubmit}
                disabled={newName.length === 0 || isSubmitting}
                className={`transition-all duration-300 ease-in-out  rounded-10 text-white H4 w-90 h-50 flex items-center justify-center ${
                  newName.length > 0 && !isSubmitting
                    ? 'bg-blue-blue30 cursor-pointer'
                    : 'bg-blue-blue20 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? '처리 중' : '수정완료'}
              </button>
            </div>
            <p className='caption-2 text-red-red20 mt-12'>{RES_ACCOUNTS.name.defaultLabel}</p>
          </div>
          <Image src={grayLogo} alt='gray logo' width={123.16} height={36.77} className='object-contain' />
        </>
      ) : (
        <>
          <div className='mb-52 pl-14'>
            <span className='caption-1 text-gray-grayscale40'>아이디</span>
            <p className='H3 text-gray-grayscale50 ml-8 mt-27'>{id}</p>
          </div>
          <div className='pl-14'>
            <span className='caption-1 text-gray-grayscale40'>관리자명</span>
            <div className='flex items-center mt-15 w-275 '>
              <p className='H3 text-gray-grayscale50 whitespace-nowrap'>{name}</p>
              <button
                onClick={setIsEditMode}
                className='ml-auto w-90 h-50 rounded-10 bg-gray-grayscale10 border-1 border-gray-grayscale20 flex items-center justify-center'
              >
                수정
                <Image src={edit} alt='edit' width={24} height={24} className='object-contain ml-7' />
              </button>
            </div>
          </div>
          <Image
            src={grayLogo}
            alt='gray logo'
            width={123.16}
            height={36.77}
            className='object-contain mt-auto mb-16'
          />
        </>
      )}
    </div>
  );
};

export default ManagerNameBox;
