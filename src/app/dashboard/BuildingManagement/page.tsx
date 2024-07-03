// import { getBuildingNameList } from '@/apis/BuildingManagement';
// import BuildingManagementTemplates from '@/components/templates/BuildingManagement';
// import React, { Suspense } from 'react';

// const BuildingManagement = async () => {
//   const buildingNameList = await getBuildingNameList();

//   return (
//     <Suspense fallback={<h1>로딩 중</h1>}>
//       <div className='flex flex-col relative w-[1174px]'>
//         <div className='flex items-center mb-8'>
//           <div className='flex justify-center w-full'>
//             <h1 className='H0 text-gray-grayscale50 text-nowrap'>건물관리</h1>
//           </div>
//         </div>
//         <BuildingManagementTemplates buildingList={buildingNameList.information} />
//       </div>
//     </Suspense>
//   );
// };

// export default BuildingManagement;

import { getBuildingNameList } from '@/apis/BuildingManagement';
import BuildingManagementTemplates from '@/components/templates/BuildingManagement';
import React, { Suspense } from 'react';

const BuildingManagement = async () => {
  try {
    const buildingNameList = await getBuildingNameList();

    return (
      <Suspense fallback={<h1>로딩 중</h1>}>
        <div className='flex flex-col relative w-[1174px]'>
          <div className='flex items-center mb-8'>
            <div className='flex justify-center w-full'>
              <h1 className='H0 text-gray-grayscale50 text-nowrap'>건물관리</h1>
            </div>
          </div>
          <BuildingManagementTemplates buildingList={buildingNameList.information} />
        </div>
      </Suspense>
    );
  } catch (error) {
    // 다른 오류 처리
    return (
      <div>
        <h1>에러가 발생했습니다: </h1>
      </div>
    );
  }
};

export default BuildingManagement;
