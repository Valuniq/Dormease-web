'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { selectedMemberIdForBlacklistState } from '@/recoil/blacklist';
import { blacklistResponseDataList } from '@/types/blacklist';
import React, { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import NoneList from '../../organisms/NoneList/NoneList';
import BlackListBody from './BlackListBody';

type Props = {
  blackLists: blacklistResponseDataList[];
  isLoading: boolean;
  isEndReached: boolean;
  setSize: (size: number | ((size: number) => number)) => void;
  onReasonChange: (id: number, reason: string) => void;
};

const BlackList = ({ blackLists, isLoading, isEndReached, setSize, onReasonChange }: Props) => {
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForBlacklistState); // 선택된 학생 ID Recoil 상태
  const [isAllChecked, setIsAllChecked] = useState(false);

  const lastElementRef = useInfiniteScroll({
    isLoading,
    isEndReached,
    onIntersect: () => setSize((prevSize) => prevSize + 1),
  });

  // 전체 선택/해제 체크박스 클릭 시 호출되는 함수
  const handleAllCheck = () => {
    if (!isAllChecked) {
      // 모든 학생의 ID를 Recoil 상태에 저장
      const allMemberIds = blackLists.map((member) => member.id);
      setSelectedMemberId(allMemberIds);
    } else {
      // 전체 선택이 해제되면, Recoil 상태를 비움
      setSelectedMemberId([]);
    }
    setIsAllChecked(!isAllChecked); // 전체 선택 상태 변경
  };

  // 개별 학생 선택 시 Recoil 상태 업데이트
  const handleMemberCheck = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedMemberId((prev) => [...prev, id]);
    } else {
      setSelectedMemberId((prev) => prev.filter((memberId) => memberId !== id));
    }
  };

  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1305px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4 w-[8%]'>번호</th>
            <th className='H4 w-[8%]'>이름</th>
            <th className='H4 w-[12%]'>학번</th>
            <th className='H4 w-[16%]'>전화번호</th>
            <th className='H4 w-[10%]'>벌점</th>
            <th className='H4 w-[26%]'>사유</th>
            <th className='H4 w-[12%]'>등록일자</th>
            <th className='w-[8%]'>
              <div className='H4 flex  items-center justify-center text-center w-full'>
                <h1 className='mr-4 '>전체</h1>
                <Checkbox isChecked={isAllChecked} setIsChecked={handleAllCheck} />
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan={8}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {blackLists && blackLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {blackLists.map((i, index) => (
              <Fragment key={index}>
                <BlackListBody
                  id={i.id}
                  index={index + 1}
                  name={i.name}
                  studentId={i.studentNumber}
                  phoneNumber={i.phoneNumber}
                  minus={i.minusPoint}
                  content={i.content}
                  registrationDate={i.createdAt}
                  ref={lastElementRef}
                  isChecked={selectedMemberId.includes(i.id)} // Recoil 상태를 기반으로 체크 상태 관리
                  setIsChecked={(isChecked) => handleMemberCheck(i.id, isChecked)} // 개별 학생 선택 시 상태 업데이트
                  onReasonChange={onReasonChange}
                />
                <tr className='h-15' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody>
            <NoneList colspan={8} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default BlackList;
