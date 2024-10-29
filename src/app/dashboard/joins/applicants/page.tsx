'use client';
import { postApplicationInspection, useApplicantSearchById, useNowApplicant } from '@/apis/applicant';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import ApplicantList from '@/components/templates/Applicant/Applicant/ApplicantList';
import { prevApplicants } from '@/constants/navigation';
import { applicantModalState, nowApplicationSettingIdState } from '@/recoil/applicant';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [input, setInput] = useState(''); // 검색 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태
  const [isSearch, setIsSearch] = useState(false); // 검색 활성화 여부 상태
  const [applicationSettingIdState, setApplicationSettingIdState] = useRecoilState(nowApplicationSettingIdState);
  const [modalState, setModalState] = useRecoilState(applicantModalState);
  const router = useRouter();

  // 현재 입사 신청에 대한 신청자 조회
  const { data: applicantListData, isLoading: isLoadingApplicants, mutate, error: applicantError } = useNowApplicant();

  // ID로 검색 (검색어가 있을 때만 API 호출)
  const {
    data: searchData,
    error: searchDataError,
    isLoading: isLoadingSearch,
  } = useApplicantSearchById(
    applicationSettingIdState,
    searchKeyword && searchKeyword.trim() !== '' ? searchKeyword : null, // 검색어가 있을 때만 API 호출
  );

  const applicantLists = isSearch
    ? searchData?.information
    : applicantListData?.information.dormitoryApplicationWebResList;

  // 검색어 입력 시 호출되는 함수
  const handleSearch = () => {
    if (input.trim() === '') {
      setIsSearch(false);
    } else if (input !== searchKeyword || !isSearch) {
      setSearchKeyword(input);
      setIsSearch(true);
    }
  };

  useEffect(() => {
    if (input.trim() === '') {
      setIsSearch(false);
    }
    // 현재 입사 신청 설정 ID 저장
    if (applicantListData?.information?.dormitoryApplicationSettingId) {
      setApplicationSettingIdState(applicantListData.information.dormitoryApplicationSettingId);
    }
  }, [input, applicantListData, setApplicationSettingIdState]);

  // 합격자 검사
  const handleInspection = async () => {
    if (!applicationSettingIdState || !applicantLists) return; // ID나 신청자 리스트가 없으면 함수 종료

    const dormitoryApplicationIds = applicantLists.map((applicant) => applicant.dormitoryApplicationId);

    try {
      const response = await postApplicationInspection(applicationSettingIdState, dormitoryApplicationIds);
      if (response.ok) {
        console.log('검사 성공:', response);
        // 성공 시 필요한 후속 처리
      } else {
        console.error('검사 실패:', response);
        // 실패 시 필요한 후속 처리
      }
    } catch (error) {
      console.error('API 호출 중 에러 발생:', error);
    }
  };

  return (
    <>
      {modalState.inspectionStart && (
        <BackDrop isOpen={modalState.inspectionStart}>
          <ConfirmPrompt
            variant={'blue'}
            label={'검사를 시작하시겠습니까?'}
            onConfirm={handleInspection}
            onCancel={() => setModalState((prev) => ({ ...prev, inspectionStart: false }))}
          />
        </BackDrop>
      )}
      <div className='w-[1250px]'>
        <div className='flex items-center justify-end mb-44'>
          <h1 className='H0 text-gray-grayscale50 mr-180'>신청자 명단</h1>
          <SearchTextBox input={input} setInput={setInput} placeholder={'이름 또는 학번'} handleSearch={handleSearch} />
        </div>
        <ApplicantList
          applicantLists={applicantLists || []}
          isAllChecked={isAllChecked}
          setIsAllChecked={setIsAllChecked}
        />
        <div className='flex itmes-center justify-between mt-12'>
          <BackBtn onClick={() => router.push(prevApplicants)} label={'이전 내역'} disabled={false} />
          <div className='mt-16 w-278 flex items-center justify-between'>
            <BtnMidVariant
              onClick={() => setModalState((prev) => ({ ...prev, inspectionStart: true }))}
              label={'검사 시작'}
              disabled={false}
              variant={'blue'}
            />
            <BtnMidVariant label={'저장'} disabled={false} variant={'whiteblue'} />
          </div>
          <div className='w-169 flex items-center justify-between'>
            <BtnMiniVariant label={'탈락'} disabled={false} selected={false} variant={'red'} />
            <BtnMiniVariant label={'합격'} disabled={false} selected={false} variant={'blue'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
