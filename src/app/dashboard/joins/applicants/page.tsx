'use client';
import { useApplicantSearchById, useNowApplicant } from '@/apis/applicant';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import ApplicantList from '@/components/templates/Applicant/Applicant/ApplicantList';
import { prevApplicants } from '@/constants/navigation';
import { nowApplicationIdState } from '@/recoil/applicant';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { applicantResponseInformation } from '@/types/applicant'; // 필요한 타입 import

const Page = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [input, setInput] = useState(''); // 검색 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태
  const [isSearch, setIsSearch] = useState(false); // 검색 활성화 여부 상태
  const [applicantListsState, setApplicantListsState] = useState<applicantResponseInformation[]>([]); // 검색 결과 또는 기본 목록 저장
  const [applicationIdState, setApplicationIdState] = useRecoilState(nowApplicationIdState);

  // 현재 입사 신청에 대한 신청자 조회
  const { data: applicantListData, isLoading: isLoadingApplicants, mutate, error: applicantError } = useNowApplicant();

  // ID로 검색 (검색어가 있을 때만 API 호출)
  const {
    data: searchData,
    error: searchDataError,
    isLoading: isLoadingSearch,
  } = useApplicantSearchById(
    applicationIdState,
    searchKeyword && searchKeyword.trim() !== '' ? searchKeyword : null, // 검색어가 있을 때만 API 호출
  );

  const applicantLists = isSearch
    ? searchData?.information
    : applicantListData?.information.dormitoryApplicationWebResList;
  const router = useRouter();

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
  }, [input]);

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-180'>신청자 명단</h1>
        <SearchTextBox
          input={input}
          setInput={setInput}
          placeholder={'이름 또는 학번'}
          handleSearch={handleSearch} // 검색 핸들러 연결
        />
      </div>
      {/* 검색어가 있으면 검색 결과를, 없으면 전체 신청자 목록을 표시 */}
      <ApplicantList
        applicantLists={applicantLists || []} // 상태에 저장된 목록을 넘김
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
      />

      <div className='flex itmes-center justify-between mt-12'>
        <BackBtn onClick={() => router.push(prevApplicants)} label={'이전 내역'} disabled={false} />
        <div className='mt-16 w-278 flex items-center justify-between'>
          <BtnMidVariant label={'검사 시작'} disabled={false} variant={'blue'} />
          <BtnMidVariant label={'저장'} disabled={false} variant={'whiteblue'} />
        </div>
        <div className='w-169 flex items-center justify-between'>
          <BtnMiniVariant label={'탈락'} disabled={false} selected={false} variant={'red'} />
          <BtnMiniVariant label={'합격'} disabled={false} selected={false} variant={'blue'} />
        </div>
      </div>
    </div>
  );
};

export default Page;
