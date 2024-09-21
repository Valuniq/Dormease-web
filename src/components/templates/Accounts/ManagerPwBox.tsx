'use client';

import PasswordShowAndHideInputText from '@/components/atoms/InputText/PasswordShowAndHideInputText/PasswordShowAndHideInputText';
import { RES_ACCOUNTS } from '@/constants/restrictions';
import { validatePassword } from '@/utils/validatePassword';
import React, { useEffect, useState } from 'react';
import Overlay from './Overlay';

type Props = {
  isActive: boolean;
  isEditMode: boolean;
};

const ManagerPwBox = ({ isActive, isEditMode }: Props) => {
  const [currentPassword, setCurrentPassword] = useState(''); // 현재 비밀번호
  const [newPassword, setNewPassword] = useState(''); // 새 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(''); // 새 비밀번호 확인
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (newPassword && !validatePassword(newPassword)) {
      setErrorMessage(RES_ACCOUNTS.password.messages.invalid);
    } else if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      setErrorMessage(RES_ACCOUNTS.password.messages.mismatch);
    } else {
      setErrorMessage('');
    }
  }, [newPassword, confirmPassword]);

  return (
    <div className='relative w-333 h-366 rounded-10 bg-gray-grayscale5 flex flex-col items-start pt-20 pl-16'>
      <Overlay isActive={isActive} />
      {isEditMode ? (
        <>
          <div className='mb-12'>
            <div className='flex items-center justify-between mb-15'>
              <span className='caption-1 text-gray-grayscale40'>새 비밀번호</span>
              <button className='w-68 h-30 rounded-10 bg-red-red10 text-white caption-1 flex items-center justify-center'>
                취소
              </button>
            </div>
            <PasswordShowAndHideInputText
              placeholder={'비밀번호'}
              isDisabled={false}
              input={newPassword}
              setInput={setNewPassword}
            />
            <div className='mb-12' />
            <PasswordShowAndHideInputText
              placeholder={'비밀번호 확인'}
              isDisabled={false}
              input={confirmPassword}
              setInput={setConfirmPassword}
            />
          </div>
          <p className='mb-44 caption-2 text-gray-grayscale-50 w-273'>{RES_ACCOUNTS.password.defaultLabel}</p>
          {errorMessage && <p className='text-red-red20 caption-2 text-center'>{errorMessage}</p>}
          <button
            disabled={!(currentPassword && newPassword && confirmPassword && !errorMessage)}
            className={`transition-all duration-300 ease-in-out mt-9 w-293 h-50 rounded-10 flex items-center justify-center H4 text-white ${
              currentPassword && newPassword && confirmPassword && !errorMessage
                ? 'bg-blue-blue30'
                : 'bg-blue-blue20 cursor-not-allowed'
            }`}
          >
            비밀번호 변경
          </button>
        </>
      ) : (
        <>
          <div className='mb-12'>
            <p className='mb-15 caption-1 text-gray-grayscale40'>비밀번호</p>
            <PasswordShowAndHideInputText
              placeholder={'비밀번호'}
              isDisabled={true}
              input={currentPassword}
              setInput={setCurrentPassword}
            />
          </div>
          <p className='mb-138 caption-2 text-gray-grayscale30 w-273'>{RES_ACCOUNTS.password.defaultLabel}</p>
          <button className='w-293 h-50 rounded-10 bg-gray-grayscale10 border-1 border-bg-gray-grayscale20 flex items-center justify-center H4 text-gray-grayscale40'>
            비밀번호 변경
          </button>
        </>
      )}
    </div>
  );
};

export default ManagerPwBox;
