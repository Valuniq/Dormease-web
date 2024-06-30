'use client';

import { useInfinitePointMemberList, usePointsDetail } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import InfiniteScroll from '@/hooks/useInfiniteScroll';

import { PointMemberResponseDataList, PointListResponseInfo } from '@/types/pointManagement';

const PointManagementPage = () => {
  const {
    pointManagementData,
    error: pointManagementError,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = useInfinitePointMemberList();
  const { data: pointData, error: pointError, isLoading: pointLoading } = usePointsDetail();

  if (pointManagementError || pointError) {
    console.error('Error fetching point management data:', pointManagementError);
    console.error('Error fetching point data:', pointError);
    return <div>Error loading data</div>;
  }

  const pointLists: PointListResponseInfo[] = pointData?.information ?? [];

  return (
    <InfiniteScroll
      isLoading={isLoadingMore || pointLoading}
      isReachingEnd={isReachingEnd}
      loadMore={() => setSize(size + 1)}
    >
      <PointManagementTemplate
        pointManagementLists={pointManagementData as PointMemberResponseDataList[]}
        pointLists={pointLists}
      />
      {isLoadingMore && <div>Loading more...</div>}
    </InfiniteScroll>
  );
};

export default PointManagementPage;
