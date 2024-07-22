'use client';

import React, { useEffect, useState } from 'react';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import ResignationDetail from '@/components/organisms/Resignation/ResignationDetail';
import { useResignationDetail } from '@/apis/Resignation';
import { ResignationDetailResponseInformation } from '@/types/resignation';
import { formatCreateDate } from '@/components/organisms/FormatCreateDate/FormatCreateDate';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { resignationIdState } from '@/recoil/resignation';

const ResignationId = () => {
  const router = useRouter();
  const id = useRecoilValue(resignationIdState);
  const { data, error, isLoading } = useResignationDetail(id);
  const [detailData, setDetailData] = useState<ResignationDetailResponseInformation>({
    exitRequestmentId: 0,
    residentName: '',
    major: '',
    studentNumber: '',
    schoolYear: 0,
    phoneNumber: '',
    dormitoryName: '',
    roomSize: 0,
    securityDepositReturnStatus: 'UNPAID',
    roomNumber: 0,
    bedNumber: 0,
    hasKey: false,
    keyNumber: '',
    exitDate: '',
    bankName: '',
    accountNumber: '',
  });

  useEffect(() => {
    if (data && data.information) {
      setDetailData(data.information);
    }
  }, [data]);

  return (
    <div className='flex flex-col text-center w-[1200px] gap-35'>
      <h1 className='H0 text-gray-grayscale50 text-nowrap w-[1200px]'>퇴사확인서 확인</h1>
      <div className='flex border-t-1 border-t-gray-grayscale50'>
        <div className='flex-1 flex flex-col gap-60 py-60 pl-103 pr-134'>
          <ResignationDetail label='이 름' value={detailData.residentName} />
          <ResignationDetail label='학 과' value={detailData.major ? detailData.major : '-'} />
          <ResignationDetail label='학 번' value={detailData.studentNumber ? detailData.studentNumber : '-'} />
          <ResignationDetail label='학 년' value={detailData.schoolYear ? detailData.schoolYear + '학년' : '-'} />
          <ResignationDetail label='휴대전화' value={detailData.phoneNumber ? detailData.phoneNumber : '-'} />
          <ResignationDetail label='건 물' value={detailData.dormitoryName ? detailData.dormitoryName : '-'} />
          <ResignationDetail
            label='보증금 환급 여부'
            value={
              detailData.securityDepositReturnStatus === 'PAYMENT'
                ? '지급'
                : detailData.securityDepositReturnStatus === 'UNALBE'
                  ? '지급 불가'
                  : '미지급'
            }
          />
        </div>
        <div className='flex-1 flex flex-col gap-60 bg-gray-grayscale5 py-60 pl-119 pr-112'>
          <ResignationDetail label='호 실' value={detailData.roomNumber ? detailData.roomNumber + '호' : '-'} />
          <ResignationDetail label='침대번호' value={detailData.bedNumber ? detailData.bedNumber + '번' : '-'} />
          <ResignationDetail label='열쇠 수령 여부' value={detailData.hasKey ? 'O' : '-'} />
          <ResignationDetail label='열쇠번호' value={detailData.keyNumber ? detailData.keyNumber : '-'} />
          <ResignationDetail
            label='퇴실날짜'
            value={detailData.exitDate ? formatCreateDate(detailData.exitDate) : '-'}
          />
          <ResignationDetail label='은행명' value={detailData.bankName ? detailData.bankName : '-'} />
          <ResignationDetail label='계좌번호' value={detailData.accountNumber ? detailData.accountNumber : '-'} />
        </div>
      </div>
      <div>
        <BtnMidVariant
          label='확인'
          disabled={false}
          variant='blue'
          onClick={() => router.push(`/dashboard/JoinApplicationSetting/Resignation`)}
        />
      </div>
    </div>
  );
};

export default ResignationId;
