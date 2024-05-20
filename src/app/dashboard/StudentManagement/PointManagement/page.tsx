import { getPointMemberList } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import { Suspense } from 'react';

const page = async () => {
  const pointsMemberList = await getPointMemberList(1);
  console.log(pointsMemberList);
  console.log(pointsMemberList.information.dataList);

  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-between mb-40'>
        <h1 className='H0 text-gray-grayscale50'>상/벌점 관리</h1>
      </div>
      <Suspense fallback={<h1>로딩 중</h1>}>
        <PointManagementTemplate list={pointsMemberList.information.dataList} />
      </Suspense>
    </div>
  );
};

export default page;
