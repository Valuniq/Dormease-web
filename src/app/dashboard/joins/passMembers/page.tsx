'use client';
import { useState, useEffect } from 'react';
import { useAllPassMembersWithSearch, useDormIdPassMembersWithSearch, usePassDormitories } from '@/apis/passMember';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import SelectBuildingDropdown from '@/components/atoms/Dropdown/SelectBuildingDropdown/SelectBuildingDropdown';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import DatePicker from '@/components/organisms/DatePicker/DatePicker';
import PassMemberList from '@/components/templates/PassMember/PassMemberList';
import { DormNameResponseInformation } from '@/types/dorm';

const initialSelect: DormNameResponseInformation = {
  id: 0,
  name: '전체',
};

const dormitoryApplicationSettingId = 1; // 기숙사 목록 조회에 사용할 입사 신청 설정 ID

const Page = () => {
  const [select, setSelect] = useState<DormNameResponseInformation>(initialSelect);
  const [isDropdownOn, setIsDropdownOn] = useState(false);
  const [dormId, setDormId] = useState<number | null>(null);
  const [searchWord, setSearchWord] = useState(''); // 검색어 상태
  const [inputValue, setInputValue] = useState(''); // 검색 입력 상태

  // 기숙사 목록 조회
  const { data: dormitoriesData } = usePassDormitories(dormitoryApplicationSettingId);

  // 전체 합격자 목록 검색 조회
  const { data: allPassMembers } = useAllPassMembersWithSearch(dormitoryApplicationSettingId, searchWord);

  // 선택된 기숙사별 합격자 목록 검색 조회
  const { data: dormPassMembers } = useDormIdPassMembersWithSearch(
    dormitoryApplicationSettingId,
    dormId || 0,
    searchWord,
  );

  // 기숙사 선택 핸들러
  const handleSelect = (id: number, name: string) => {
    setSelect({ id, name });
    setDormId(id === 0 ? null : id); // "전체" 선택 시 dormId를 null로 설정
  };

  // 검색 핸들러
  const handleSearch = () => {
    setSearchWord(inputValue); // 입력된 검색어로 검색어 상태를 업데이트
  };

  // 검색어 지울 때 전체 목록으로 다시 렌더링
  useEffect(() => {
    if (!inputValue) {
      setSearchWord('');
    }
  }, [inputValue]);

  // 기숙사 목록에서 "전체" 추가
  const dormitoryList = [
    { id: 0, name: '전체' },
    ...(dormitoriesData?.information.map((dorm) => ({
      id: dorm.dormitoryId,
      name: dorm.dormitoryName,
    })) || []),
  ];

  // 보여줄 합격자 목록 결정
  const passMemberLists = dormId === null ? allPassMembers?.information : dormPassMembers?.information;

  return (
    <div className='w-[1250px] flex flex-col items-start'>
      <div className=' mb-20 w-full flex items-center justify-between'>
        <h1 className='H0 text-gray-grayscale50'>합격자 명단</h1>
        <div className='relative'>
          <div className='mr-[220px]'>
            <SearchTextBox
              input={inputValue}
              setInput={setInputValue}
              placeholder={'검색어를 입력해주세요.'}
              handleSearch={handleSearch} // 검색 실행 함수 전달
            />
          </div>

          <div className='absolute right-0 top-0'>
            <SelectBuildingDropdown
              isOn={isDropdownOn}
              setIsOn={setIsDropdownOn}
              list={dormitoryList}
              select={select}
              setSelect={handleSelect}
            />
          </div>
        </div>
      </div>

      <div className='mb-40 flex items-center ml-auto'>
        <DatePicker
          title='룸메이트 신청기간'
          startDate={undefined}
          endDate={undefined}
          setStartDate={function (startDate: Date): void {
            throw new Error('Function not implemented.');
          }}
          setEndDate={function (endDate: Date): void {
            throw new Error('Function not implemented.');
          }}
          handlePosting={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>

      <PassMemberList passMemberLists={passMemberLists || []} />

      <div className='mt-29 w-691 ml-auto flex items-center justify-between'>
        <BtnMidVariant label={'매칭시작'} disabled={false} variant={'blue'} />
        <BtnMidVariant label={'완료'} disabled={false} variant={'green'} />
      </div>
    </div>
  );
};

export default Page;
