'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import LoginBtn from '@/components/atoms/AllBtn/LoginBtn/LoginBtn';
import LoginInputText from '@/components/atoms/InputText/LoginInputText/LoginInputText';
import { accountsModalState } from '@/recoil/account';
import { UserLoginRequest } from '@/types/user';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

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
}: Props) => {
  const [isPWEditMode, setIsPWEditMode] = useState(false);
  const [modalState, setModalState] = useRecoilState(accountsModalState);
  return (
    <>
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
                <div onClick={() => setIsPWEditMode(true)} className='H4 text-blue-blue30'>
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
