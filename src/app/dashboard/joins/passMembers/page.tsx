'use client';
import { useState, useEffect } from 'react';
import {
  useAllPassMembersWithSearch,
  useDormIdPassMembersWithSearch,
  usePassDormitories,
  useAllPassMembers,
  useDormIdPassMembers,
} from '@/apis/passMember';
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

const Page = () => {
  const [select, setSelect] = useState<DormNameResponseInformation>(initialSelect);
  const [isDropdownOn, setIsDropdownOn] = useState(false);
  const [dormId, setDormId] = useState<number>(0);
  const [input, setInput] = useState(''); // 검색 입력 상태
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색어 상태
  const [isSearch, setIsSearch] = useState(false); // 검색 활성화 여부 상태
  const [dormitoryApplicationSettingId, setDormitoryApplicationSettingId] = useState<number | null>(null);

  // 전체 합격자 목록 조회
  const { data: allPassMembers, error: allPassMembersError } = useAllPassMembers();

  // 기숙사별 합격자 목록 조회
  const { data: dormPassMembers, error: dormPassMembersError } = useDormIdPassMembers(dormId || 0);

  // 조건부로 전체 합격자 검색 API 호출 (검색어가 있을 때만 호출)
  const { data: allPassMembersWithSearch, error: allPassMembersWithSearchError } = useAllPassMembersWithSearch(
    isSearch && searchKeyword ? searchKeyword : null,
  );

  // 조건부로 기숙사별 합격자 검색 API 호출 (검색어와 기숙사 ID가 있을 때만 호출)
  const { data: dormPassMembersWithSearch, error: dormPassMembersWithSearchError } = useDormIdPassMembersWithSearch(
    dormId && isSearch && searchKeyword ? dormId : null,
    searchKeyword ? searchKeyword : null,
  );

  // **최종적으로 사용할 합격자 목록**
  const passMemberLists = isSearch
    ? dormId === 0
      ? allPassMembersWithSearch?.information
      : dormPassMembersWithSearch?.information
    : dormId === 0
      ? allPassMembers?.information?.passDormitoryApplicationResList
      : dormPassMembers?.information?.passDormitoryApplicationResList;

  console.log('passMemberLists:', passMemberLists); // 디버그용 콘솔

  // 기숙사 목록 조회 (항상 호출)
  const { data: dormitoriesData, error: dormitoriesError } = usePassDormitories();

  // 기숙사 선택 핸들러
  const handleSelect = (id: number, name: string) => {
    setSelect({ id, name });
    setDormId(id); // '전체' 선택 시 dormId를 0으로 설정
    setIsSearch(false); // 기숙사 선택 시 검색 해제
  };

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

  // 기숙사 목록에 '전체' 추가
  const dormitoryList = [
    { id: 0, name: '전체' },
    ...(dormitoriesData?.information.map((dorm) => ({
      id: dorm.dormitoryId,
      name: dorm.dormitoryName,
    })) || []),
  ];

  return (
    <div className='w-[1250px] flex flex-col items-start'>
      <div className=' mb-20 w-full flex items-center justify-between'>
        <h1 className='H0 text-gray-grayscale50'>합격자 명단</h1>
        <div className='relative'>
          <div className='mr-[220px]'>
            <SearchTextBox
              input={input}
              setInput={setInput}
              placeholder={'검색어를 입력해주세요.'}
              handleSearch={handleSearch}
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
