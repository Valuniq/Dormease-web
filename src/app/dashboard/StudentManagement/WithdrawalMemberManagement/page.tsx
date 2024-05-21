import { getWithdrawalLists } from '@/apis/Withdrawal';
import WithdrawalMemberManagementTemplate from '@/components/templates/WithdrawalMemberManagement';
import React, { Suspense } from 'react';

const page = async () => {
  const lists = await getWithdrawalLists(1);
  console.log(lists.information);

  return (
    <Suspense fallback={<h1>로딩 중</h1>}>
      <WithdrawalMemberManagementTemplate list={lists} />
    </Suspense>
  );
};

export default page;
