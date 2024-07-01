'use client';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import SortImg from '@public/images/DropDownBtn.png';
import PointManagementListBody from './PointManagementListBody';
import NoneList from '../NoneList/NoneList';
import { PointMemberResponseDataList } from '@/types/pointManagement';
import { selectedMemberIdForPointState } from '@/recoil/pointManagement';
import { useRecoilState } from 'recoil';
import BackDrop from '../BackDrop/Backdrop';
import usePointManagementModal from '@/hooks/usePointManagmentModal';
import PenaltyHistoryPrompt from '../Prompt/PointManagement/PenaltyHistoryPrompt/PenaltyHistoryPrompt';

type Props = {
  pointManagementLists: PointMemberResponseDataList[];
  plusSort: boolean; // true-오름차순, false-내림차순
  setPlusSort: (plusSort: boolean) => void;
  minusSort: boolean;
  setMinusSort: (minusSort: boolean) => void;
};

const PointManagementList = ({ pointManagementLists, plusSort, setPlusSort, minusSort, setMinusSort }: Props) => {
  const [selectedMemberId, setSelectedMemberId] = useRecoilState(selectedMemberIdForPointState);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const { isOpened, handleOpenModal } = usePointManagementModal();
  useEffect(() => {
    if (isAllChecked) {
      // 모든 학생의 ID를 Recoil 상태에 저장
      const allMemberIds = pointManagementLists.map((member) => member.id);
      setSelectedMemberId(allMemberIds);
    } else {
      // 전체 선택이 해제되면, Recoil 상태를 비움
      setSelectedMemberId([]);
    }
  }, [isAllChecked, pointManagementLists, setSelectedMemberId]);
  return (
    <>
      {isOpened.pointHistory && (
        <BackDrop isOpen={isOpened.pointHistory}>
          <PenaltyHistoryPrompt
            penaltyLists={[]}
            plusSum={0}
            minusSum={0}
            isAllChecked={false}
            setIsAllChecked={function (isAllChecked: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
        </BackDrop>
      )}
      <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
        <table className='w-[1250px]'>
          <thead className='w-full h-36 bg-white sticky top-0 z-1'>
            <tr className='text-gray-grayscale50'>
              <th className='H4'>번호</th>
              <th className='H4'>이름</th>
              <th className='H4'>학번</th>
              <th className='H4'>전화번호</th>
              <th onClick={() => setPlusSort(!plusSort)}>
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>상점</h1>
                  <Image
                    src={SortImg}
                    height={8}
                    width={16}
                    className={`object-contain ${plusSort ? 'rotate-180' : ''}`}
                    alt='sort img'
                  />
                </div>
              </th>
              <th onClick={() => setMinusSort(!minusSort)}>
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>벌점</h1>
                  <Image
                    src={SortImg}
                    height={8}
                    width={16}
                    className={`object-contain ${minusSort ? 'rotate-180' : ''}`}
                    alt='sort img'
                  />
                </div>
              </th>
              <th className='H4'>건물</th>
              <th className='H4'>호실</th>
              <th>
                <div className='H4 flex items-center justify-center text-center w-full'>
                  <h1 className='mr-4'>전체</h1>
                  <Checkbox isChecked={isAllChecked} setIsChecked={setIsAllChecked} />
                </div>
              </th>
            </tr>
            <tr>
              <th colSpan={9}>
                <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
              </th>
            </tr>
          </thead>
          {pointManagementLists && pointManagementLists.length > 0 ? (
            <tbody className='overflow-y-scroll'>
              <tr className='h-14' />
              {pointManagementLists.map((i, key) => (
                <Fragment key={i.id}>
                  <PointManagementListBody
                    onClick={() => handleOpenModal('pointHistory')}
                    index={key + 1}
                    data={{
                      id: i.id,
                      name: i.name,
                      studentNumber: i.studentNumber,
                      phoneNumber: i.phoneNumber,
                      bonusPoint: i.bonusPoint,
                      minusPoint: i.minusPoint,
                      dormitory: i.dormitory,
                      room: i.room,
                    }}
                  />
                  <tr className='h-14' />
                </Fragment>
              ))}
            </tbody>
          ) : (
            <tbody className='overflow-y-scroll'>
              <tr>
                <td className='h-500' colSpan={9}>
                  <NoneList />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default PointManagementList;
