'use client';
import { updateBlacklistReason, useInfiniteBlacklist } from '@/apis/blacklist';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';
import ResignBtn from '@/components/atoms/AllBtn/ResignBtn/ResignBtn';
import BlackList from '@/components/templates/BlackList/BlackList';
import { useState } from 'react';

const Page = () => {
  const { blacklistsData, error, isLoadingMore, size, setSize, isEndReached, mutate } = useInfiniteBlacklist();
  const [editedReasons, setEditedReasons] = useState<Record<number, string>>({});

  // 사유가 변경될 때 호출되는 함수
  const handleReasonChange = (id: number, reason: string) => {
    setEditedReasons((prev) => {
      if (prev[id] !== reason) {
        // 변경된 경우에만 업데이트
        return { ...prev, [id]: reason };
      }
      return prev;
    });
  };

  // 저장 버튼 클릭 시 호출되는 함수
  const handleSave = async () => {
    const updatePromises = Object.entries(editedReasons).map(([id, content]) =>
      updateBlacklistReason(Number(id), content),
    );

    try {
      await Promise.all(updatePromises);
      alert('모든 사유가 성공적으로 업데이트되었습니다.');

      // 업데이트가 완료된 후 수정된 항목 상태를 초기화
      setEditedReasons({});

      // mutate를 호출하여 다시 데이터를 가져오도록 함
      mutate();
    } catch (error) {
      alert('업데이트 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='w-[1250px] flex flex-col items-center'>
      <h1 className='H0 text-gray-grayscale50 mb-8'>블랙리스트</h1>
      <div className='ml-auto mb-24'>
        <BtnMiniVariant label={'저장'} onClick={handleSave} disabled={false} selected={false} variant={'blue'} />
      </div>
      <BlackList
        blackLists={blacklistsData}
        isLoading={isLoadingMore ?? false}
        isEndReached={isEndReached}
        setSize={setSize}
        onReasonChange={handleReasonChange}
      />
      <div className='ml-auto mt-24'>
        <ResignBtn label={'삭제하기'} />
      </div>
    </div>
  );
};

export default Page;
