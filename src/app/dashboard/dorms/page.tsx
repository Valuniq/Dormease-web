'use client';

import { useDormNameList } from '@/apis/dorm';
import DormIndex from '@/components/templates/Dorm';
import React, { useState } from 'react';

const Page = () => {
  const { data, error, isLoading } = useDormNameList();
  const [mounted, setMounted] = useState(false);

  return (
    <div className='flex flex-col relative w-[1174px]'>
      {mounted && (
        <div className='flex items-center mb-8'>
          <div className='flex justify-center w-full'>
            <h1 className='H0 text-gray-grayscale50 text-nowrap'>건물관리</h1>
          </div>
        </div>
      )}
      {data && <DormIndex buildingList={data.information} mounted={mounted} setMounted={setMounted} />}
    </div>
  );
};

export default Page;
