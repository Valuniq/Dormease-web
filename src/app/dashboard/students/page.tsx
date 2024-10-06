'use client';
import React, { useEffect, useState } from 'react';
import PlusBtnVariant from '@/components/atoms/AllBtn/PlusBtnVariant/PlusBtnVariant';
import GrayBtn from '@/components/atoms/AllBtn/GrayBtn/GrayBtn';
import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import StudentList from '@/components/templates/Student/List/StudentList';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { editState } from '@/recoil/nav';
import { useStudentList, useStudentSearchList } from '@/apis/student';

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const setEditState = useSetRecoilState(editState);
  const [sortBy, setSortBy] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  const studentList = useStudentList(sortBy, isAscending);
  const studentSearchList = useStudentSearchList(searchKeyword, sortBy, isAscending);

  const { studentData, isLoading, setSize, isEndReached } = isSearch ? studentSearchList : studentList;

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
    <div className='flex flex-col w-[1225px]'>
      <div className='flex justify-between items-center mb-32 w-[1225px]'>
        <h1 className='H0 text-gray-grayscale50 text-nowrap'>사생관리</h1>
        <div className='flex gap-19'>
          <SearchTextBox input={input} setInput={setInput} placeholder='이름 또는 학번' handleSearch={handleSearch} />
          <GrayBtn label='엑셀 업로드' disabled={false} />
          <GrayBtn label='엑셀 다운로드' disabled={false} />
        </div>
      </div>
      <StudentList
        list={studentData}
        isLoading={isLoading ?? false}
        isEndReached={isEndReached}
        setSize={setSize}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />
      <div className='flex justify-end mt-13'>
        <PlusBtnVariant
          label='사생 추가'
          disabled={false}
          variant='blue'
          onClick={() => {
            setEditState(true);
            router.push(`/dashboard/students/additions`);
          }}
        />
      </div>
    </div>
  );
};

export default Page;
