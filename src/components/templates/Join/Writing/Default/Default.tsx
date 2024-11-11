import { joinApplicationState } from '@/recoil/join';
import React from 'react';
import { useRecoilState } from 'recoil';
import Deposit from './Deposit';
import Period from './Period';

const Default = () => {
  const [applicationData, setApplicationData] = useRecoilState(joinApplicationState);

  // 입사 신청 기간 업데이트 함수
  const updateApplicationPeriod = (newPeriod: { startDate: string; endDate: string }) => {
    setApplicationData({
      ...applicationData,
      startDate: newPeriod.startDate,
      endDate: newPeriod.endDate,
    });
  };

  // 입금 가능 기간 업데이트 함수
  const updateDepositPeriod = (newDepositPeriod: { startDate: string; endDate: string }) => {
    setApplicationData({
      ...applicationData,
      depositStartDate: newDepositPeriod.startDate,
      depositEndDate: newDepositPeriod.endDate,
    });
  };

  // 보증금 업데이트 함수
  const updateSecurityDeposit = (newDeposit: number) => {
    setApplicationData({
      ...applicationData,
      securityDeposit: newDeposit,
    });
  };

  return (
    <div className='px-8 flex items-center justify-between border-t-gray-grayscale50 border-t-1 py-20'>
      {/* 입사 신청 기간 */}
      <Period
        label={'입사 신청 기간'}
        input={{ startDate: applicationData.startDate, endDate: applicationData.endDate }}
        setInput={updateApplicationPeriod}
      />

      {/* 입금 가능 기간 */}
      <Period
        label={'입금 가능 기간'}
        input={{ startDate: applicationData.depositStartDate, endDate: applicationData.depositEndDate }}
        setInput={updateDepositPeriod}
      />

      {/* 보증금 */}
      <Deposit input={applicationData.securityDeposit} setInput={updateSecurityDeposit} />
    </div>
  );
};

export default Default;
