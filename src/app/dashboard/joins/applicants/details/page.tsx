'use client';
import { useApplicantById, useApplicantSearchById } from '@/apis/applicant';
import BackBtn from '@/components/atoms/AllBtn/BackBtn/BackBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import PrevApplicantDetailList from '@/components/templates/Applicant/PrevApplicantDetail/PrevApplicantDetailList';
import { prevApplicants } from '@/constants/navigation';
import { detailApplicatoinNameState, nowApplicationIdState } from '@/recoil/applicant';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Page = () => {
  const [applicationIdState] = useRecoilState(nowApplicationIdState);
  const { data, isLoading, error } = useApplicantById(applicationIdState);
  const [detailNameState, setDetailNameState] = useRecoilState(detailApplicatoinNameState);
  const [loaded, setLoaded] = useState(false); // 클라이언트에서 로드 여부 확인

  const router = useRouter();
  const [input, setInput] = useState(''); // 검색 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태
  const [isSearch, setIsSearch] = useState(false); // 검색 활성화 여부 상태

  // ID로 검색 (검색어가 있을 때만 API 호출)
  const {
    data: searchData,
    error: searchDataError,
    isLoading: isLoadingSearch,
  } = useApplicantSearchById(
    applicationIdState,
    searchKeyword && searchKeyword.trim() !== '' ? searchKeyword : null, // 검색어가 있을 때만 API 호출
  );

  // 클라이언트에서만 Recoil 상태 업데이트
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoaded(true); // 클라이언트에서만 loaded 상태 true로 설정
    }
  }, []);

  // 검색어 처리 로직
  const prevDetailLists = isSearch ? searchData?.information : data?.information;
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
    <div className='w-[1305px] flex flex-col gap-30'>
      <div className='flex justify-between items-end'>
        {/* 서버에서는 기본값을 표시하고, 클라이언트가 로드된 후 Recoil 상태를 표시 */}
        <h1 className='H1 text-gray-grayscale50'>{loaded ? detailNameState : 'Loading...'}</h1>
        <SearchTextBox
          input={input}
          setInput={setInput}
          placeholder={'이름 또는 학번'}
          handleSearch={handleSearch} // 검색 핸들러 연결
        />
      </div>
      <PrevApplicantDetailList applicantLists={prevDetailLists || []} />
      <BackBtn onClick={() => router.push(prevApplicants)} label={'뒤로가기'} disabled={false} />
    </div>
  );
};

export default Page;
