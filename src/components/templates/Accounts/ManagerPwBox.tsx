'use client';

import { putAdminPassword } from '@/apis/account';
import PasswordShowAndHideInputText from '@/components/atoms/InputText/PasswordShowAndHideInputText/PasswordShowAndHideInputText';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { RES_ACCOUNTS } from '@/constants/restrictions';
import { accountsActiveAreaState, accountsModalState } from '@/recoil/account';
import { validatePassword } from '@/utils/validatePassword';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Overlay from './Overlay';

type Props = {
  isActive: boolean;
  isEditMode: boolean;
  setIsEditMode: () => void;
  setSecureMode: () => void;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
};

const ManagerPwBox = ({ isActive, isEditMode, setIsEditMode, setSecureMode, openModal, closeModal }: Props) => {
  const [newPassword, setNewPassword] = useState(''); // 새 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(''); // 새 비밀번호 확인
  const [errorMessage, setErrorMessage] = useState('');
  const [modalState, setModalState] = useRecoilState(accountsModalState);

  useEffect(() => {
    if (newPassword && !validatePassword(newPassword)) {
      setErrorMessage(RES_ACCOUNTS.password.messages.invalid);
    } else if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      setErrorMessage(RES_ACCOUNTS.password.messages.mismatch);
    } else {
      setErrorMessage('');
    }
  }, [newPassword, confirmPassword]);

  const handlePasswordChange = async () => {
    try {
      await putAdminPassword(newPassword);
      closeModal('passwordConfirm');
      openModal('passwordChanged');
    } catch (error) {
      closeModal('passwordConfirm');
      openModal('passwordFailed');
    }
  };

  return (
    <>
      {modalState.passwordConfirm && (
        <BackDrop isOpen={modalState.passwordConfirm}>
          <ConfirmPrompt
            variant={'blue'}
            label={'비밀번호를 변경하시겠습니까?'}
            onConfirm={handlePasswordChange}
            onCancel={() => closeModal('passwordConfirm')}
          />
        </BackDrop>
      )}
      {modalState.passwordChanged && (
        <BackDrop isOpen={modalState.passwordChanged}>
          <AlertPrompt
            variant={'blue'}
            label={'비밀번호를 성공적으로 변경하였습니다.'}
            onConfirm={() => {
              closeModal('passwordChanged'), setIsEditMode(), setNewPassword('');
              setConfirmPassword('');
            }}
          />
        </BackDrop>
      )}
      {modalState.passwordFailed && (
        <BackDrop isOpen={modalState.passwordFailed}>
          <AlertPrompt
            variant={'red'}
            label={'비밀번호 변경에 실패했습니다. 다시 시도해주세요.'}
            onConfirm={() => closeModal('passwordFailed')}
          />
        </BackDrop>
      )}
      <div className='relative w-333 h-366 rounded-10 bg-gray-grayscale5 flex flex-col items-start pt-20 pl-16'>
        <Overlay isActive={isActive} />
        {isEditMode ? (
          <>
            <div className='mb-12'>
              <div className='flex items-center justify-between mb-15'>
                <span className='caption-1 text-gray-grayscale40'>새 비밀번호</span>
                <button
                  onClick={setIsEditMode}
                  className='w-68 h-30 rounded-10 bg-red-red10 text-white caption-1 flex items-center justify-center'
                >
                  취소
                </button>
              </div>
              <PasswordShowAndHideInputText
                placeholder={'비밀번호'}
                isDisabled={false}
                input={newPassword}
                setInput={setNewPassword}
                isActive={true}
              />
              <div className='mb-12' />
              <PasswordShowAndHideInputText
                placeholder={'비밀번호 확인'}
                isDisabled={false}
                input={confirmPassword}
                setInput={setConfirmPassword}
                isActive={true}
              />
            </div>
            <p className='caption-2 text-gray-grayscale-50 w-273'>{RES_ACCOUNTS.password.defaultLabel}</p>
            {errorMessage && <p className='text-red-red20 caption-2 text-center'>{errorMessage}</p>}
            <button
              onClick={() => openModal('passwordConfirm')}
              disabled={!(newPassword && confirmPassword && !errorMessage)}
              className={`mt-auto mb-20 transition-all duration-300 ease-in-out w-293 h-50 rounded-10 flex items-center justify-center H4 text-white ${
                newPassword && confirmPassword && !errorMessage
                  ? 'bg-blue-blue30 cursor-pointer'
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
                placeholder={'••••••••••'}
                isDisabled={true}
                input={'••••••••••'}
                setInput={() => {}}
                isActive={isActive}
              />
            </div>
            <p className='caption-2 text-gray-grayscale30 w-273'>{RES_ACCOUNTS.password.defaultLabel}</p>
            <button
              disabled={!isActive}
              onClick={setSecureMode}
              className='w-293 mt-auto mb-20  h-50 rounded-10 bg-gray-grayscale10 border-1 border-bg-gray-grayscale20 flex items-center justify-center H4 text-gray-grayscale40'
            >
              비밀번호 변경
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ManagerPwBox;
