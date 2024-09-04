'use client';
import { useInfiniteBlacklist } from '@/apis/blacklist';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';
import BlackList from '@/components/templates/BlackList/BlackList';
import { useState } from 'react';
import { mockBlackList } from './mockData';

const Page = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const { blacklistsData, error, isLoadingMore, size, setSize, isEndReached, mutate } = useInfiniteBlacklist();

  return (
    <div className='w-[1250px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50 mb-8'>블랙리스트</h1>
      <div className='ml-auto mb-24'>
        <BtnMiniVariant label={'저장'} disabled={false} selected={false} variant={'blue'} />
      </div>
      <BlackList
        blackLists={blacklistsData}
        isLoading={isLoadingMore ?? false}
        isEndReached={isEndReached}
        setSize={setSize}
      />
      <div className='ml-auto mt-24'>
        <ResignBtn label={'삭제하기'} />
      </div>
    </div>
  );
};

export default Page;
