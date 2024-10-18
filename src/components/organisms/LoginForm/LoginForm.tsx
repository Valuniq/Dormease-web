import React from 'react';
import { accountsModalState } from '@/recoil/account';
import { useRecoilState } from 'recoil';

import LoginBtn from '@/components/atoms/AllBtn/LoginBtn/LoginBtn';
import LoginInputText from '@/components/atoms/InputText/LoginInputText/LoginInputText';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';

type Props = {
  loginId: string;
  setLoginId: (id: string) => void;
  password: string;
  setPassword: (pw: string) => void;
  handleLogin: ({ loginId, password }: { loginId: string; password: string }) => void;
  loginBtnDisabled: boolean;
  buttonLabel: string;
  isAutoLogin: boolean;
  setIsAutoLogin: (value: boolean) => void;
  onLoginClick: () => void;
};

const LoginForm = ({
  loginId,
  setLoginId,
  password,
  setPassword,
  handleLogin,
  loginBtnDisabled,
  buttonLabel,
  isAutoLogin,
  setIsAutoLogin,
  onLoginClick,
}: Props) => {
  const [modalState, setModalState] = useRecoilState(accountsModalState);

  return (
    <>
      <div className='w-510 h-485 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center'>
        <>
          <h1 className='H1 text-gray-grayscale50 mb-31'>도미즈 관리자 로그인</h1>
          <div>
            <div className='mb-19'>
              <LoginInputText input={loginId} setInput={setLoginId} placeholder={'아이디'} type={'text'} />
            </div>
            <div className='mb-19'>
              <LoginInputText input={password} setInput={setPassword} placeholder={'비밀번호'} type={'password'} />
            </div>
            <div className='flex justify-between items-center mb-27 px-5'>
              <div className='flex items-center gap-8'>
                <Checkbox isChecked={isAutoLogin} setIsChecked={(checked) => setIsAutoLogin(checked)} />
                <span className='alert-cap text-black'>자동 로그인</span>
              </div>
            </div>
            <LoginBtn onClick={onLoginClick} label={buttonLabel} disabled={loginBtnDisabled} />
          </div>
        </>
      </div>
    </>
  );
};

export default LoginForm;
