'use client';

import { useInfinitePointMemberList, usePointsDetail } from '@/apis/PointManagment';
import PointManagementTemplate from '@/components/templates/pointManagement/index';
import { BASE_URL } from '@/constants/path';
import InfiniteScroll from '@/hooks/useInfiniteScroll';
import { PointMemberResponseDataList, PointListResponseInfo } from '@/types/pointManagement';
import { mutate } from 'swr';

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

  // 데이터 갱신 시 SWR 캐시를 업데이트
  const refreshData = () => {
    mutate(`${BASE_URL}/api/v1/web/points`);
    mutate(`${BASE_URL}/api/v1/web/points/detail`);
  };

  return (
    <PointManagementTemplate
      pointManagementLists={pointManagementData as PointMemberResponseDataList[]}
      pointLists={pointLists}
    />
  );
};

export default PointManagementPage;
