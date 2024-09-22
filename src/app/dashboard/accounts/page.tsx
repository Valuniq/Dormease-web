'use client';
import { useAdminAccount } from '@/apis/account';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import DormeaseInfoBox from '@/components/templates/Accounts/DormeaseInfoBox';
import DormInfoBox from '@/components/templates/Accounts/DormInfoBox';
import ManagerNameBox from '@/components/templates/Accounts/ManagerNameBox';
import ManagerPwBox from '@/components/templates/Accounts/ManagerPwBox';
import SecureConfirmPrompt from '@/components/templates/Accounts/SecureConfirmPrompt';
import { DORMEASE_INFO } from '@/constants/dormease';
import { accountsActiveAreaState, accountsModalState } from '@/recoil/account';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [secure, setSecure] = useState('');
  const [activeAreaState, setActiveAreaState] = useRecoilState(accountsActiveAreaState);
  const [modalState, setModalState] = useRecoilState(accountsModalState);

  const { data: adminAccount, error, isLoading } = useAdminAccount();

  // NameBox 활성화 상태 변경
  const toggleNameBox = () => {
    setActiveAreaState((prevState) => ({
      ...prevState,
      namebox: !prevState.namebox,
      passwordBox: prevState.namebox ? prevState.passwordBox : false, // namebox가 활성화되면 passwordBox 비활성화
    }));
  };

  // PasswordBox 활성화 상태 변경
  const togglePasswordBox = () => {
    setActiveAreaState((prevState) => ({
      ...prevState,
      passwordBox: !prevState.passwordBox,
      namebox: prevState.passwordBox ? prevState.namebox : false, // passwordBox가 활성화되면 nameBox 비활성화
    }));
  };

  // 모달 열기 함수
  const openModal = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  // 모달 닫기 함수
  const closeModal = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  // DormInfoBox와 DormeaseInfoBox가 nameBox 또는 passwordBox가 편집 모드일 때 비활성화
  const dormInfoActive = !activeAreaState.namebox && !activeAreaState.passwordBox;

  return (
    <>
      {modalState.passwordSecure && (
        <BackDrop isOpen={modalState.passwordSecure}>
          <SecureConfirmPrompt
            variant={'red'}
            label={'비밀번호 변경을 위해 보안코드를 입력해주세요'}
            onClose={() => closeModal('passwordSecure')}
            secure={secure}
            setSecure={setSecure}
            activatePasswordEdit={togglePasswordBox}
          />
        </BackDrop>
      )}

      <div className='flex flex-col items-center justify-center'>
        <h1 className='H0 text-gray-grayscale50 mb-41'>계정 관리</h1>
        <div
          className={`w-[1079px] transition-all duration-500 ease-in-out h-594 shadow3 rounded-20 flex items-center justify-center gap-20 ${dormInfoActive ? 'bg-white' : 'bg-[rgba(0,0,0,0.25)]'}`}
        >
          <div className='flex flex-col items-center justify-center gap-20'>
            <DormInfoBox
              dormInfo={adminAccount?.information.schoolName || '관리자 학교 이름'}
              isActive={dormInfoActive}
            />
            <div className='flex gap-20'>
              <ManagerNameBox
                id={adminAccount?.information.loginId || '관리자 아이디'}
                name={adminAccount?.information.adminName || '관리자 이름'}
                isActive={!activeAreaState.passwordBox} // PasswordBox가 편집 모드일 때 비활성화
                isEditMode={activeAreaState.namebox} // nameBox 편집 모드 상태
                setIsEditMode={toggleNameBox} // NameBox 편집 모드 토글 함수
              />
              <ManagerPwBox
                isActive={!activeAreaState.namebox} // NameBox가 편집 모드일 때 비활성화
                isEditMode={activeAreaState.passwordBox} // passwordBox 편집 모드 상태
                setIsEditMode={togglePasswordBox} // PasswordBox 편집 모드 토글 함수
                setSecureMode={() => openModal('passwordSecure')}
                openModal={openModal}
                closeModal={closeModal}
              />
            </div>
          </div>
          <div className='flex flex-col gap-20 items-center justify-center'>
            <DormeaseInfoBox
              address={DORMEASE_INFO.address}
              tel={DORMEASE_INFO.tel}
              fax={DORMEASE_INFO.fax}
              isActive={dormInfoActive}
            />
            <button
              disabled={dormInfoActive}
              className='w-333 h-57 rounded-10 bg-red-red10 text-white btn-cap flex items-center justify-center'
            >
              종료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
