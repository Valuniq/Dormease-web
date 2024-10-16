import React from 'react';
import RefundListBody from './RefundListBody';
import NoneList from '../../organisms/NoneList/NoneList';
import { RefundListResponseDataList } from '@/types/refund';

type Props = {
  clickRefund: number;
  onStudentClick: (refundRequestmentId: number) => void;
  onDeleteRefund: () => void;
  list: RefundListResponseDataList[];
};

const RefundList = ({ list, clickRefund, onDeleteRefund, onStudentClick }: Props) => {
  return (
    <div className='text-nowrap text-center text-gray-grayscale50'>
      <div className='flex w-full border-b-1 pb-15'>
        <div className='H4 w-[6%]'>이 름</div>
        <div className='H4 w-[10%]'>학 번</div>
        <div className='H4 w-[12%]'>휴대전화</div>
        <div className='H4 w-[8%]'>은행명</div>
        <div className='H4 w-[15%]'>계좌번호</div>
        <div className='H4 w-[7%]'>기간</div>
        <div className='H4 w-[8%]'>퇴사 예정일</div>
        <div className='H4 w-[8%]'>신청날짜</div>
        <div className='H4 w-[12%]'>건 물</div>
        <div className='H4 w-[7%]'>호 실</div>
        <div className='H4 w-[7%]'>침대번호</div>
      </div>
      {list && list.length > 0 ? (
        <div className='w-full'>
          {list.map((data, index) => {
            const isLastItem = index === list.length - 1;
            return (
              <React.Fragment key={data.refundRequestmentId}>
                <RefundListBody
                  key={index}
                  isLastItem={isLastItem}
                  clickRefund={clickRefund}
                  onStudentClick={onStudentClick}
                  onDeleteRefund={onDeleteRefund}
                  item={data}
                />
                {isLastItem && <div className='border-b-1 border-gray-grayscale50'></div>}
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <table className='w-full h-693'>
          <tbody>
            <NoneList colspan={11} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RefundList;
