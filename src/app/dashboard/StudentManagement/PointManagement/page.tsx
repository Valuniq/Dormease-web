import { getPointMemberList } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import { Suspense } from 'react';

const page = async () => {
  const pointsMemberList = await getPointMemberList(1);
  console.log(pointsMemberList);
  console.log(pointsMemberList.information.dataList);

  return (
    <Suspense fallback={<h1>로딩 중</h1>}>
      <PointManagementTemplate list={pointsMemberList.information.dataList} />
    </Suspense>
  );
};

export default page;
