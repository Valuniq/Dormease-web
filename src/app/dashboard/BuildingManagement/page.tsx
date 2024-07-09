'use client';

import { useBuildingNameList } from '@/apis/BuildingManagement';
import BuildingManagementTemplates from '@/components/templates/BuildingManagement';
import React from 'react';

const BuildingManagement = () => {
  const { data, error, isLoading } = useBuildingNameList();

  return (
    <div className='flex flex-col relative w-[1174px]'>
      <div className='flex items-center mb-8'>
        <div className='flex justify-center w-full'>
          <h1 className='H0 text-gray-grayscale50 text-nowrap'>건물관리</h1>
        </div>
      </div>
      {data && <BuildingManagementTemplates buildingList={data.information} />}
    </div>
  );
};

export default BuildingManagement;
