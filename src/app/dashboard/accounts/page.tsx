'use client';
import DormeaseInfoBox from '@/components/templates/Accounts/DormeaseInfoBox';
import DormInfoBox from '@/components/templates/Accounts/DormInfoBox';
import ManagerNameBox from '@/components/templates/Accounts/ManagerNameBox';
import ManagerPwBox from '@/components/templates/Accounts/ManagerPwBox';
import { accountsActiveAreaState } from '@/recoil/account';
import React from 'react';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [activeAreaState, setActiveAreaState] = useRecoilState(accountsActiveAreaState);

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

  // DormInfoBox와 DormeaseInfoBox가 nameBox 또는 passwordBox가 편집 모드일 때 비활성화
  const dormInfoActive = !activeAreaState.namebox && !activeAreaState.passwordBox;

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='H0 text-gray-grayscale50 mb-41'>계정 관리</h1>
      <div
        className={`w-[1079px] transition-all duration-500 ease-in-out h-594 shadow3 rounded-20 flex items-center justify-center gap-20 ${dormInfoActive ? 'bg-white' : 'bg-[rgba(0,0,0,0.25)]'}`}
      >
        <div className='flex flex-col items-center justify-center gap-20'>
          <DormInfoBox dormInfo={''} isActive={dormInfoActive} />
          <div className='flex gap-20'>
            <ManagerNameBox
              id={'Dormease1234'}
              name={'강승정'}
              isActive={!activeAreaState.passwordBox} // PasswordBox가 편집 모드일 때 비활성화
              isEditMode={activeAreaState.namebox} // nameBox 편집 모드 상태
              setIsEditMode={toggleNameBox} // NameBox 편집 모드 토글 함수
            />
            <ManagerPwBox
              isActive={!activeAreaState.namebox} // NameBox가 편집 모드일 때 비활성화
              isEditMode={activeAreaState.passwordBox} // passwordBox 편집 모드 상태
              setIsEditMode={togglePasswordBox} // PasswordBox 편집 모드 토글 함수
            />
          </div>
        </div>
        <div className='flex flex-col gap-20 items-center justify-center'>
          <DormeaseInfoBox address={''} tel={''} fax={''} isActive={dormInfoActive} />
          <button className='w-333 h-57 rounded-10 bg-red-red10 text-white btn-cap flex items-center justify-center'>
            종료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
