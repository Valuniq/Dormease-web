'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import LoginBtn from '@/components/atoms/AllBtn/LoginBtn/LoginBtn';
import LoginInputText from '@/components/atoms/InputText/LoginInputText/LoginInputText';
import SecureConfirmPrompt from '@/components/templates/Accounts/SecureConfirmPrompt';
import { accountsModalState } from '@/recoil/account';
import { UserLoginRequest } from '@/types/user';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import BackDrop from '../BackDrop/Backdrop';

type Props = {
  loginId: string;
  setLoginId: (id: string) => void;
  password: string;
  setPassword: (pw: string) => void;
  handleLogin: ({ loginId, password }: UserLoginRequest) => void;
  loginBtnDisabled: boolean;
  errorMessage: string;
  newPassword: string;
  setNewPassword: (value: string) => void;
  confirmedPassword: string;
  setConfirmedPassword: (value: string) => void;
  isPWEditMode: boolean;
  setIsPWEditMode: (value: boolean) => void;
};

const LoginForm = ({
  loginId,
  setLoginId,
  password,
  setPassword,
  handleLogin,
  loginBtnDisabled,
  newPassword,
  setNewPassword,
  confirmedPassword,
  setConfirmedPassword,
  errorMessage,
  isPWEditMode,
  setIsPWEditMode,
}: Props) => {
  const [secure, setSecure] = useState('');
  const [modalState, setModalState] = useRecoilState(accountsModalState);
  // 비밀번호 편집 모드 활성화 함수
  const activatePasswordEdit = () => {
    setIsPWEditMode(true); // 비밀번호 편집 모드를 활성화
  };
  return (
    <>
      {modalState.passwordSecure && (
        <BackDrop isOpen={modalState.passwordSecure}>
          <SecureConfirmPrompt
            variant={'red'}
            label={'비밀번호 변경을 위해 보안코드를 입력해주세요'}
            onClose={() => {
              setModalState((prev) => ({ ...prev, passwordSecure: false })), setSecure('');
            }}
            secure={secure}
            setSecure={setSecure}
            activatePasswordEdit={activatePasswordEdit}
          />
        </BackDrop>
      )}

      <div className='w-510 h-485 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center'>
        {isPWEditMode ? (
          <>
            <h1 className='H1 text-gray-grayscale50 mb-30'>비밀번호 재설정</h1>
            <div>
              <div className='mb-19'>
                <LoginInputText
                  input={newPassword}
                  setInput={setNewPassword}
                  placeholder={'새 비밀번호'}
                  type={'password'}
                />
              </div>
              <div className='mb-19'>
                <LoginInputText
                  input={confirmedPassword}
                  setInput={setConfirmedPassword}
                  placeholder={'새 비밀번호 확인'}
                  type={'password'}
                />
              </div>
              <div className='flex mx-auto mb-15 w-356 caption-1 text-gray-grayscale40 text-center'>
                영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 6~20자로 입력해주세요.
              </div>

              <LoginBtn
                onClick={() => setModalState((prev) => ({ ...prev, passwordConfirm: true }))}
                label={'비밀번호 변경'}
                disabled={!(newPassword && confirmedPassword && !errorMessage)}
              />
              <div className='H4 text-red-red20 flex justify-center mt-10 items-center text-center'>{errorMessage}</div>
            </div>
          </>
        ) : (
          <>
            {' '}
            <h1 className='H1 text-gray-grayscale50 mb-31'>도미즈 관리자 로그인</h1>
            <div>
              <div className='mb-19'>
                <LoginInputText input={loginId} setInput={setLoginId} placeholder={'아이디'} type={'text'} />
              </div>
              <div className='mb-19'>
                <LoginInputText input={password} setInput={setPassword} placeholder={'비밀번호'} type={'password'} />
              </div>
              <div className='flex justify-between items-center  mb-27 px-5'>
                <div className='flex items-center gap-8 '>
                  <Checkbox
                    isChecked={false}
                    setIsChecked={function (isChecked: boolean): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                  <span className='alert-cap text-black'>자동 로그인</span>
                </div>
                <div
                  onClick={() => setModalState((prev) => ({ ...prev, passwordSecure: true }))}
                  className='cursor-pointer H4 text-blue-blue30'
                >
                  비밀번호 찾기
                </div>
              </div>

              <LoginBtn
                onClick={() => handleLogin({ loginId, password })}
                label={'로그인'}
                disabled={loginBtnDisabled}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LoginForm;
