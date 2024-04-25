import React from 'react';
import NoneList from '../NoneList/NoneList';
import PassMemberListBody, { Props as passMemberList } from './PassMemberListBody';

type Props = {
  passMemberLists: passMemberList[];
};

const PassMemberList = ({ passMemberLists }: Props) => {
  return (
    <div className='w-fit h-693 overflow-y-scroll overflow-x-visible border-b-1 border-b-gray-grayscale50'>
      <table className='w-[1250px]'>
        <thead className='w-full h-36 bg-white sticky top-0 z-1'>
          <tr className='text-gray-grayscale50'>
            <th className='H4'>차수</th>
            <th className='H4'>이름</th>
            <th className='H4'>학번</th>
            <th className='H4'>성별</th>
            <th className='H4'>흡연</th>
            <th className='H4'>룸메신청</th>
            <th className='H4'>침대번호</th>
            <th className='H4'>호실</th>
            <th className='H4'>배정</th>
          </tr>
          <th colSpan={9}>
            <div className='w-full h-18 border-b-1 border-b-gray-grayscale50' />
          </th>
        </thead>
        <tbody className='overflow-y-scroll'>
          <tr className='h-15' />
          {passMemberLists && passMemberLists.length > 0 ? (
            <>
              {passMemberLists.map((i) => (
                <>
                  <PassMemberListBody
                    degree={i.degree}
                    name={i.name}
                    studentId={i.studentId}
                    gender={i.gender}
                    isSmoking={i.isSmoking}
                    appliedRoommate={i.appliedRoommate}
                    bedNumber={i.bedNumber}
                    room={i.room}
                    assignment={i.assignment}
                  />
                  <tr className='h-15' />
                </>
              ))}
            </>
          ) : (
            <td className='h-500' colSpan={9}>
              <NoneList />
            </td>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PassMemberList;
