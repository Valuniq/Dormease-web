import { getPointMemberList, getPointsDetail } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import { Suspense } from 'react';

const page = async () => {
  const pointManagementLists = await getPointMemberList(1);
  const pointLists = await getPointsDetail();
  console.log('pointManagementList', pointManagementLists);
  console.log('pointLists', pointLists);

  return (
    <Suspense fallback={<h1>로딩 중</h1>}>
      <PointManagementTemplate
        pointManagementLists={pointManagementLists.information.dataList}
        pointLists={pointLists.information}
      />
    </Suspense>
  );
};

export default page;
