import NoneList from '@/components/organisms/NoneList/NoneList';
import { PassDormitoryApplicationRes } from '@/types/passMember';
import React from 'react';
import PassMemberListBody from './PassMemberListBody';

type Props = {
  passMemberLists: PassDormitoryApplicationRes[];
};

const PassMemberList = ({ passMemberLists }: Props) => {
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1250px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4 w-[8%]'>차수</th>
            <th className='H4 w-[8%]'>이름</th>
            <th className='H4 w-[22%]'>학번</th>
            <th className='H4 w-[8%]'>성별</th>
            <th className='H4 w-[8%]'>흡연</th>
            <th className='H4 w-[18%]'>룸메신청</th>
            <th className='H4 w-[12%]'>침대번호</th>
            <th className='H4 w-[8%]'>호실</th>
            <th className='H4 w-[8%]'>배정</th>
          </tr>
          <tr>
            <th colSpan={9}>
              <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
            </th>
          </tr>
        </thead>

        {passMemberLists && passMemberLists.length > 0 ? (
          <tbody className='overflow-y-scroll'>
            <tr className='h-15' />
            {passMemberLists.map((i) => (
              <>
                <PassMemberListBody
                  degree={999}
                  name={i.studentName}
                  studentId={i.studentNumber}
                  gender={i.gender}
                  isSmoking={i.smoker}
                  appliedRoommate={i.roommateCode}
                  bedNumber={i.bedNumber}
                  room={i.roomNumber}
                  assignment={i.assignment}
                />
                <tr className='h-15' />
              </>
            ))}
          </tbody>
        ) : (
          <tbody>
            <NoneList colspan={9} />
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PassMemberList;
