'use client';
import { prevApplicantDetail } from '@/constants/navigation';
import { detailApplicatoinNameState, nowApplicationIdState } from '@/recoil/applicant';
import { historyResponseInformation } from '@/types/applicant';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import NoneList from '../../../organisms/NoneList/NoneList';

type Props = {
  prevApplicantLists: historyResponseInformation[];
};

const PrevApplicantList = ({ prevApplicantLists }: Props) => {
  const [detailNameState, setDetailNameState] = useRecoilState(detailApplicatoinNameState);
  const [applicationIdState, setApplicationIdState] = useRecoilState(nowApplicationIdState);
  // 클릭 시 Recoil에 id 저장 및 페이지 이동 처리
  const handlePrevApplicantClick = (applicationId: number, title: string) => {
    setApplicationIdState(applicationId); // applicationId를 Recoil 상태에 저장
    setDetailNameState(title); // 제목을 Recoil 상태에 저장
    router.push(prevApplicantDetail); // 원하는 경로로 이동
  };

  const router = useRouter();
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1250px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>제목</th>
            <th className='H4'>등록일자</th>
          </tr>
          <tr>
            <th colSpan={2}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {prevApplicantLists && prevApplicantLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {prevApplicantLists.map((i, index) => (
              <Fragment key={index}>
                <tr
                  onClick={() => handlePrevApplicantClick(i.dormitoryApplicationSettingId, i.title)}
                  className='h-38 hover-transition cursor-pointer hover:bg-gray-grayscale10 active:bg-gray-grayscale20 H4-caption text-gray-grayscale50'
                >
                  <td className='text-center'>{i.title}</td>
                  <td className='text-center'>{i.createdDate}</td>
                </tr>
                <tr className='h-15' />
              </Fragment>
            ))}
          </tbody>
        ) : (
          <tbody className='h-693'>
            <NoneList colspan={2} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PrevApplicantList;
